let precios = [10, 20, 30, 40];
const total = precios.reduce((acumulador, precio) => {
    return acumulador + precio;
});

console.log(total);