var productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" }
];
  
var productosFiltrados = productos.filter(function(p) {
    return p.precio < 100;
});
console.log("Filtrados:", productosFiltrados);
  
var productosOrdenados = productosFiltrados.sort(function(a, b) {
    return a.nombre.localeCompare(b.nombre);
});
console.log("Ordenados:", productosOrdenados);
  
var nombresProductos = productosOrdenados.map(function(p) {
    return p.nombre;
});
console.log("Nombres:", nombresProductos);
  
var precioTotal = productosFiltrados.reduce(function(acumulador, p) {
    return acumulador + p.precio;
}, 0);
console.log("Precio Total: ", precioTotal);
  
var existeRopa = productos.some(function(p) {
    return p.categoria === "Ropa";
});
console.log("¿Hay productos de Ropa?", existeRopa);
  
  
var todosPositivos = productosFiltrados.every(function(p) {
    return p.precio > 0;
});
console.log("¿Todos los productos filtrados tienen precio mayor a 0?", todosPositivos);
  