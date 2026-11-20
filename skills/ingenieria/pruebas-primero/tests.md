# Pruebas buenas y malas

## Pruebas buenas

**De estilo integración:** probá el comportamiento a través de interfaces reales, no de simulaciones de componentes internos.

```typescript
// BIEN: comprueba comportamiento observable
 test("el usuario puede pagar con un carrito válido", async () => {
  const cart = createCart();
  cart.add(product);
  const result = await checkout(cart, paymentMethod);
  expect(result.status).toBe("confirmed");
});
```

Características:

- Comprueban comportamientos importantes para usuarios o consumidores.
- Utilizan únicamente la API pública.
- Sobreviven a refactorizaciones internas.
- Describen **QUÉ** hace el sistema, no **CÓMO** lo hace.
- Cada prueba tiene un propósito claro. Puede combinar las aserciones necesarias para comprobar ese resultado.

## Pruebas malas

**Pruebas de detalles de implementación:** están acopladas a la estructura interna.

```typescript
// MAL: comprueba detalles internos
 test("checkout llama a calcularTotal", async () => {
  const calcularTotal = vi.spyOn(calculosInternos, "calcularTotal");
  await checkout(cart, paymentMethod);
  expect(calcularTotal).toHaveBeenCalledTimes(1);
});
```

Señales de alerta:

- Simulan colaboradores internos.
- Comprueban métodos privados.
- Exigen cantidades u órdenes concretos de llamadas internas.
- Fallan tras refactorizaciones que no cambiaron el comportamiento.
- Su nombre explica **CÓMO**, no **QUÉ**.
- Verifican resultados mediante mecanismos externos en lugar de la interfaz pública.

```typescript
// MAL: evita la interfaz para verificar
 test("createUser guarda en la base de datos", async () => {
  await createUser({ name: "Alice" });
  const row = await db.query("SELECT * FROM users WHERE name = ?", ["Alice"]);
  expect(row).toBeDefined();
});

// BIEN: verifica a través de la interfaz
 test("createUser permite recuperar al usuario", async () => {
  const user = await createUser({ name: "Alice" });
  const retrieved = await getUser(user.id);
  expect(retrieved.name).toBe("Alice");
});
```

**Pruebas tautológicas:** el valor esperado repite el mismo cálculo de la implementación y la prueba pasa por construcción.

```typescript
// MAL: calcula el esperado igual que la implementación
 test("calculateTotal suma los elementos", () => {
  const items = [{ price: 10 }, { price: 5 }];
  const expected = items.reduce((sum, i) => sum + i.price, 0);
  expect(calculateTotal(items)).toBe(expected);
});

// BIEN: usa un resultado conocido, calculado de manera independiente
 test("calculateTotal suma los elementos", () => {
  expect(calculateTotal([{ price: 10 }, { price: 5 }])).toBe(15);
});
```
