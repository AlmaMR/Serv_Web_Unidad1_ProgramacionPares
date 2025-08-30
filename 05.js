// Funciones básicas
// Escribe una función llamada saludar(nombre) que reciba un nombre y devuelva un mensaje de saludo,
// por ejemplo: "Hola, Juan".

// creamos una función llamada saludar que recibira una cadena
function saludar(nomb){
    console.log("Hola ", nomb, "ten un buen día");
    // Imprimimos en consola un mensaje junto a la cadena recibida
}

// Guardamos en una variable la cadena que enviaremos a la función
let nombre = prompt("Ingresa tu nombre:");

// Mandamos llamar la función junto la variable anterior
saludar(nombre);