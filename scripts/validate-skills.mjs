#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const skillsRoot = path.join(root, 'skills');
const readmePath = path.join(root, 'README.md');

const errors = [];

function fail(msg) {
  errors.push(msg);
}

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const block = match[1];
  const fields = {};
  for (const line of block.split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (kv) {
      fields[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, '');
    }
  }
  return fields;
}

function stripCode(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\r\n]*`/g, '');
}

function checkRelativeLinks(filePath) {
  const relFile = path.relative(root, filePath).replaceAll('\\', '/');
  const text = stripCode(fs.readFileSync(filePath, 'utf8'));
  const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
  for (const match of text.matchAll(linkRegex)) {
    const rawHref = match[1].trim();
    if (/^(https?:|mailto:|#)/i.test(rawHref)) continue;
    const cleanHref = rawHref.split('#')[0];
    if (!cleanHref) continue;
    const resolved = path.resolve(path.dirname(filePath), cleanHref);
    if (!fs.existsSync(resolved)) {
      fail(`Enlace roto en ${relFile}: ${rawHref}`);
    }
  }
}

// 1. Discover and validate every SKILL.md
const allFiles = walk(skillsRoot);
const skillFiles = allFiles.filter((f) => path.basename(f) === 'SKILL.md');
const skills = new Map();

for (const skillFile of skillFiles) {
  const relPath = path.relative(root, skillFile).replaceAll('\\', '/');
  const dir = path.dirname(skillFile);
  const folderName = path.basename(dir);
  const content = fs.readFileSync(skillFile, 'utf8');
  const fm = parseFrontmatter(content);

  if (!fm) {
    fail(`Frontmatter faltante o inválido en ${relPath}`);
    continue;
  }
  if (!fm.name) {
    fail(`Falta 'name' en el frontmatter de ${relPath}`);
  } else if (fm.name !== folderName) {
    fail(`'name' (${fm.name}) no coincide con la carpeta (${folderName}) en ${relPath}`);
  }
  if (!fm.description) {
    fail(`Falta 'description' en el frontmatter de ${relPath}`);
  }

  const manualInMd = fm['disable-model-invocation'] === 'true';

  // 2. Check parity with agents/openai.yaml
  const yamlPath = path.join(dir, 'agents', 'openai.yaml');
  if (!fs.existsSync(yamlPath)) {
    fail(`Falta agents/openai.yaml para la skill '${folderName}'`);
  } else {
    const yaml = fs.readFileSync(yamlPath, 'utf8');
    const manualInYaml = /allow_implicit_invocation:\s*false\b/.test(yaml);
    if (manualInMd !== manualInYaml) {
      fail(
        `Desfase de invocación en '${folderName}': SKILL.md (${manualInMd ? 'Manual' : 'Auto'}) != agents/openai.yaml (${manualInYaml ? 'Manual' : 'Auto'})`
      );
    }
  }

  skills.set(folderName, { relPath, manual: manualInMd });
}

// 3. Validate README.md coverage and invocation parity
const readme = fs.readFileSync(readmePath, 'utf8');

for (const [name, info] of skills) {
  const expectedLink = `./${info.relPath}`;
  if (!readme.includes(expectedLink)) {
    fail(`La skill '${name}' (${expectedLink}) no figura enlazada en README.md`);
  }
}

// Check Manual/Auto column in README tables
const tableRowRegex = /^\|\s*\[\$([a-z0-9-]+)\]\(([^)]+)\)\s*\|[^|]+\|\s*(Manual|Auto)\s*\|$/gm;
for (const match of readme.matchAll(tableRowRegex)) {
  const [, name, , invocation] = match;
  const skill = skills.get(name);
  if (!skill) {
    fail(`README.md lista una skill inexistente en el catálogo: '${name}'`);
    continue;
  }
  const expected = skill.manual ? 'Manual' : 'Auto';
  if (invocation !== expected) {
    fail(`Desfase en README.md para '${name}': figura '${invocation}' pero SKILL.md es '${expected}'`);
  }
}

// Check skill names listed in README Dependencias table
const depsMatch = readme.match(/<summary>Dependencias al instalar por nombre<\/summary>([\s\S]*?)<\/details>/);
if (depsMatch) {
  for (const match of depsMatch[1].matchAll(/`([a-z0-9-]+)`/g)) {
    const depSkill = match[1];
    if (!skills.has(depSkill)) {
      fail(`README.md (Dependencias) referencia una skill inexistente: '${depSkill}'`);
    }
  }
}

// 4. Validate elegir-flujo table references
const elegirFlujoPath = path.join(skillsRoot, 'ingenieria', 'elegir-flujo', 'SKILL.md');
if (fs.existsSync(elegirFlujoPath)) {
  const elegirContent = fs.readFileSync(elegirFlujoPath, 'utf8');
  for (const match of elegirContent.matchAll(/^\|\s*[^|]+\|\s*`([a-z0-9-]+)`\s*\|$/gm)) {
    const targetName = match[1];
    if (!skills.has(targetName)) {
      fail(`elegir-flujo/SKILL.md referencia una skill inexistente: '${targetName}'`);
    }
  }
}

// 5. Validate relative links in README.md and all markdown files under skills/
checkRelativeLinks(readmePath);
for (const mdFile of allFiles.filter((f) => f.endsWith('.md'))) {
  checkRelativeLinks(mdFile);
}

if (errors.length > 0) {
  console.error(`Validación fallida (${errors.length} error${errors.length === 1 ? '' : 'es'}):`);
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log(`OK: ${skills.size} skills validadas (frontmatter, paridad SKILL.md/openai.yaml/README y enlaces).`);
