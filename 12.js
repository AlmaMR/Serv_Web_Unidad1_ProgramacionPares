// Reducir un array
// Dado let precios = [10, 20, 30, 40], usa
// .reduce() para obtener el total de la suma de los precios.

// Creamos un arreglo con datos
let precios = [10, 20, 30, 40];

// creamos una variable donde guardaremos el resultado de .reduce
const total = precios.reduce((acumulador, precio) => {
    return acumulador + precio;
});

// Imprimimos en consola el resultado de .reduce que guardamos en la variable total
console.log(total);