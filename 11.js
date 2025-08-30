// Mapear un array
// Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde
// cada número esté elevado al cuadrado.

// Creamos dos arreglos uno con datos
let numeros = [1, 2, 3, 4, 5];

// Y en el segundo usaremos .map para elevar al cuadrado
// cada dato del arreglo anterior y guardarlo en este
let elevados = numeros.map(function (x) {
    return x * x;
});

// Imprimimos el segundo arreglo con los datos elevados al cuadro del primero
console.log(elevados);