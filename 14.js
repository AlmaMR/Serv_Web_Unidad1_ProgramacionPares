// Manejo de Promesas
// Crea una función que devuelva una promesa que se resuelva
// después de 2 segundos con el mensaje "Promesa resuelta".

// Función que contiene una Promise que se resolvera
// 2 segundos despues con la ayuda de setTimeout
function promesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);
  });
}

// Imprimimos el resultado de la funcion promesa
console.log(promesa());