//Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 
// y muestra el resultado en consola.

//USAMOS LA FUNCIÓN fetch() PARA HACER UNA SOLICITUD A LA URL INDICADA. 
// ESTA PROPORCIONA UNA INTERFAZ JAVASCRIPT PARA ACCEDER Y MANIPULAR PARTES DEL CANAL HTTP, TALES COMO PETICIONES Y RESPUESTAS.

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // CONVERTIMOS LA RESPUESTA A UN JSON
    .then(json => console.log("Respuesta recibida:", json)) // MOSTRAMOS EL JSON EN CONSOLA;
