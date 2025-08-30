// Uso de async/await
// Modifica la función del ejercicio anterior para que use async y await.

// Función asincrona que contiene una Promise que se resolvera
// 2 segundos despues con la ayuda de setTimeout
async function promesa() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);
  });

  return await promesa;

}

// Imprimimos el resultado de la funcion promesa
console.log(promesa());