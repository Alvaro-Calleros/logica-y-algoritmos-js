let compras = new Set();

const addProduct = (product) => compras.add(product);


const deleteProduct = (product) => compras.delete(product);


const mostrarLista = () => {
    for (let product of compras){
        console.log(product);
    }
};

addProduct("Manzanas");
addProduct("Leche");
addProduct("Huevos");
addProduct("Manzanas");

mostrarLista();

