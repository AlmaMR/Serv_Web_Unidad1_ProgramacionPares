// Filtrar elementos de un array
// Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo
// arreglo solo con los mayores de edad.

// Creamos 2 arreglos, uno con datos y el otro vacio 
let edades = [12, 18, 25, 10, 30, 16];
let filtrados = [];

// Usando filter(), con esto filtraremos el arreglo con datos y solamente guardaremos en
// el arreglo vacio los que cumplan la condicion edad >= 18
filtrados = edades.filter(edad => edad >= 18);

// Imprimimos el arreglo que tiene guardados los datos ya filtrados
console.log(filtrados);