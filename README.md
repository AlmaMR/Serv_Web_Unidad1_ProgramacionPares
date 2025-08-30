# Nivel 1: Conceptos básicos


## 1️ Variables y tipos de datos:
- Crea una variable llamada nombre y asígnale tu nombre. Luego, imprime el valor en la consola.
**Se declararon variables (nombre1, nombre2) y se les asignaron valores tipo string con nombres completos. Se imprimieron en consola con console.log, mostrando cómo almacenar y mostrar texto.**


## 2️ Operaciones matemáticas:
- Declara dos variables con números y realiza las operaciones básicas: suma, resta, multiplicación y división. Imprime los resultados.
**Se crearon dos variables (num1, num2) con valores numéricos. Luego se hicieron las operaciones básicas: suma, resta , multiplicación  y división, guardando cada resultado en variables diferentes y mostrando en consola.**


## 3️ Condicionales (if-else):
- Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.
**Se solicitó la edad al usuario con prompt. El programa usó un if-else para comparar: si edad >= 18 imprime "Eres Mayor de Edad", de lo contrario imprime "No Eres Mayor de Edad".**


## 4️ Bucles (for-loop):
- Escribe un programa que imprima los números del 1 al 10 en la consola.
**Se implementó un ciclo for que comienza en 1 y termina en 10. En cada iteración imprime el valor actual de i, mostrando los números del 1 al 10.**


## 5️ Funciones básicas:
- Escribe una función llamada saludar(nombre) que reciba un nombre y devuelva un mensaje de saludo, por ejemplo: "Hola, Juan".
**Se definió la función saludar que recibe un argumento y muestra un mensaje de saludo concatenando el nombre. El nombre se pidió con prompt y se pasó como parámetro al llamar la función.**



# Nivel 2: Arreglos y Objetos

## 6 Manipulación de arreglos:
- Crea un array con los nombres de 5 ciudades y muestra la segunda ciudad en la consola.

**Se creó un arreglo de 5 ciudades y se accedió a la segunda con el índice 1 y Se imprimió en consola. Mostrando el uso de índices.**



## 7️ Recorriendo arreglos con forEach:
- Dado un arreglo let numeros = [2, 4, 6, 8, 10], usa forEach para imprimir cada número en la consola.

**Se definió un arreglo con números pares y se recorrió con .forEach(), pasando una función que imprime cada número en consola.**



## 8️ Uso de objetos:
- Crea un objeto persona con propiedades nombre, edad y profesión. Imprime su nombre.

**Se creó un objeto persona con propiedades (Nombre, Edad, Profesion). Para mostrar solo un valor se accedió con persona.Nombre y se imprimió en consola.**



## 9️ Manipulación de objetos:
- Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.

**A partir del objeto persona, se le agregó dinámicamente una nueva propiedad Nacionalidad usando objeto.propiedad = valor. Luego se imprimió para verificar la adición.**



## 10 Filtrar elementos de un array:
- Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con los mayores de edad.

**Se creó un arreglo con distintas edades y se aplicó .filter() para obtener un nuevo arreglo con solo los mayores o iguales a 18. Este método recorre el array y guarda únicamente los que cumplen la condición.**



# Nivel 3: Funciones y Métodos Avanzados
## 11 Mapear un array:
- Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.

**Se definió un arreglo de números y se aplicó .map(), que devuelve un nuevo arreglo donde cada número fue elevado al cuadrado (x * x). Luego se imprimió el nuevo arreglo.**



## 12 Reducir un array:
- Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.

**Se creó un arreglo con precios y se usó .reduce() para recorrerlos acumulando la suma total en una variable total.**



## 13 Funciones asíncronas (setTimeout):
- Escribe una función que imprima "Hola después de 3 segundos" utilizando setTimeout().

**Se usó setTimeout() con un retardo de 3000 milisegundos (3 segundos) para imprimir en consola el mensaje "Hola, Pasaron 3 segundos."**



## 14 Manejo de Promesas:
- Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".

**Se creó una función que devuelve una Promise. Dentro se usó setTimeout para que, después de 2 segundos, la promesa se resolviera con el mensaje "Promesa resuelta".**



## 15 Uso de async/await:
- Modifica la función del ejercicio anterior para que use async y await.

**Se redefinió la función anterior con async. Dentro, se creó una promesa que se resuelve a los 2 segundos y con await se esperó su resolución antes de retornarla. Se imprime el resultado mostrando cómo manejar asincronía de forma más legible.**





# Nivel 4: Manipulación de Strings y Objetos Complejos

## 16 Expresiones Regulares:
- Crea una función que valide si una cadena de texto es un correo electrónico válido.

**Se pidió un correo con prompt. Se definió un patrón con regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/ que valida la estructura de un email. Luego, con .test(correo) se verificó si es válido e imprimió el resultado en consola.**



## 17 Transformación de texto:
- Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.

**Se definió la cadena "Hola, cómo estás?". Primero se convirtió a mayúsculas con .toUpperCase(). Después se eliminó la coma con .replace(/,/g, '').**



## 18 Ordenamiento de un array:
- Dado let palabras = ["banana", "manzana", "pera", "uva"], usa .sort() para ordenarlas alfabéticamente.

**Se definió un arreglo de palabras y se usó .sort() para ordenarlas alfabéticamente. El método reorganiza el array directamente y se mostró el resultado ordenado en consola.**



## 19 Simulación de un endpoint con fetch (JSONPlaceholder):
- Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.

**Se utilizó fetch() para hacer una petición a la URL https://jsonplaceholder.typicode.com/todos/1. La respuesta se convirtió en JSON con .json() y se imprimió en consola.**



## 20 Creación de un pequeño CRUD en memoria:
- Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
    - Agregar una tarea.
    - Eliminar una tarea por id.
    - Marcar una tarea como completada.

**Se creó un array tareas que guarda objetos {Id, Descripcion, Completado}.**
**agregarTarea(id, descripcion): añade una tarea, evitando duplicados con .find().**
**eliminarTarea(id): elimina una tarea existente con .filter().**
**completarTarea(id): marca una tarea como completada modificando su propiedad.**
**Finalmente se probaron estas funciones creando, completando y eliminando tareas en consola.**


