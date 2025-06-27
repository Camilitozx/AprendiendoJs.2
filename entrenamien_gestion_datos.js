// Objeto que contiene los productos disponibles.
// Cada entrada representa un producto con id único, nombre y precio.
const productos = {
  producto1: { id: 1, nombre: "Laptop", precio: 2500 },
  producto2: { id: 2, nombre: "Teclado", precio: 150 },
  producto3: { id: 3, nombre: "Mouse", precio: 80 }
};

// Se extraen los valores del objeto (los productos) en un arreglo.
const arrayProductos = Object.values(productos);

// Se convierte el array a un Set para asegurar que no existan duplicados.
// Esto funciona correctamente si las referencias de los objetos son únicas.
const setProductos = new Set(arrayProductos);

// Se crea un Map para asociar una categoría con el nombre de un producto.
// Permite búsqueda rápida por categoría y se puede expandir fácilmente.
const mapCategorias = new Map();
mapCategorias.set("Tecnología", "Laptop");
mapCategorias.set("Accesorios", "Teclado");
mapCategorias.set("Periféricos", "Mouse");

// Recorre el objeto productos utilizando for...in.
// Útil para acceder a las claves (producto1, producto2, ...) y sus respectivos valores.
console.log("=== Productos (desde el objeto) ===");
for (let key in productos) {
  const p = productos[key];
  console.log(`ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}`);
}

// Recorre el Set utilizando for...of para imprimir productos únicos.
// Cada elemento del set es un objeto producto.
console.log("\n=== Productos únicos (desde el Set) ===");
for (let producto of setProductos) {
  console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
}

// Recorre el Map utilizando forEach para imprimir categoría y nombre del producto.
// El orden de inserción se conserva.
console.log("\n=== Categorías y productos (desde el Map) ===");
mapCategorias.forEach((producto, categoria) => {
  console.log(`Categoría: ${categoria}, Producto: ${producto}`);
});

// Validación básica: verifica que todos los productos tengan id, nombre y precio definidos.
// Ideal para asegurar integridad antes de operar sobre los datos.
console.log("\n=== Validación de datos ===");
arrayProductos.forEach((producto, i) => {
  const esValido = producto.id && producto.nombre && producto.precio;
  console.log(`Producto ${i + 1}: ${esValido ? "válido" : "incompleto"}`);
});
