//Crea un array llamado tareas que almacene objetos { id, descripcion, completado }.
//Agrega funciones para:
//  - Agregar una tarea.
//  - Eliminar una tarea por id.
//  - Marcar una tarea como completada.

//CRAMOS EL ARREGLO EN EL QUE ALMACENAREMOS LAS TAREAS
let tareas = [];

//CREAMOS LA FUNCION PARA AGREGAR TAREAS
function agregarTarea(id, descripcion) {

    //VERIFICAMOS QUE NO EXISTA UNA TAREA CON EL MISMO ID UTILIZANDO EL MÉTODO .find()
    // PREVIO A AÑADIRLA Y ABORTAMOS LA CREACIÓN DE SER ASÍ.
    //ESTE MÉTODO SE UTILIZA PARA BUSCAR UN ELEMENTO EN UN ARREGLO QUE CUMPLE CON UNA CONDICION.
    let repetido = tareas.find(tarea => tarea.Id === id);
    if (repetido) {
        console.log(`Ya existe una tarea con id ${id}.`);
        return;
    }

    //CREAMOS EL OBJETO TAREA Y LO AÑADIMOS AL ARREGLO CON SU ID, DESCRIPCION Y ESTADO INICIAL EN FALSE POR DEFECTO.
    const nuevaTarea = {
        Id: id,
        Descripcion: descripcion,
        Completado: false
    };
    //AGREGAMOS LA NUEVA TAREA AL FINAL DEL ARREGLO CON EL MÉTODO .push() Y MANDAMOS UN MENSAJE INFORMATIVO
    tareas.push(nuevaTarea);
    console.log(`Tarea ${descripcion}`, "agregada correctamente.");
}

//CREAMOS LA FUNCION PARA ELIMINAR TAREAS
function eliminarTarea(id) {

    //COMENZAMOS VERIFICANDO CON .find() SI EXISTE LA TAREA CON EL ID INGRESADO Y LA GUARDAMOS EN UNA VARIABLE.
    let aEliminar = tareas.find(tarea => tarea.Id === id);

    //SI EXISTE, UTILIZAMOS EL MÉTODO .filter() PARA REHACER EL ARREGLO SIN LA TAREA A ELIMINAR.
    if (aEliminar) {
        tareas = tareas.filter(tarea => tarea.Id !== id);
        console.log(`Tarea ${aEliminar.Descripcion}`, "eliminada correctamente.");
    } else {
        console.log(`No se encontró tarea con id ${id}.`);
    }

}

//CREAMOS LA FUNCION PARA COMPLETAR TAREAS
function completarTarea(id) {
    //NUEVAMENTE UTILIZAMOS .find() PARA VERIFICAR SI EXISTE LA TAREA Y GUARDARLA EN UNA VARIABLE.
    let aCompletar = tareas.find(tarea => tarea.Id === id);

    //SI EXISTE, MODIFICAMOS SU PROPIEDAD "Completado" A TRUE Y MANDAMOS UN MENSAJE PARA INFORMAR EL CAMBIO.
    if (aCompletar) {
        aCompletar.Completado = true;
        console.log(`Tarea ${aCompletar.Descripcion}`, "marcada como completada.");
    } else {
        console.log(`No se encontró la tarea con id ${id}.`);
    }

}

//FINALMENTE PROBAMOS MANUALMENTE LAS FUNCIONES PARA VERIFICAR SU FUNCIONAMIENTO.
agregarTarea(1, "Comprar leche");
agregarTarea(2, "Estudiar");
agregarTarea(3, "Hacer ejercicio");

console.log(tareas);

completarTarea(2);
console.log(tareas);

eliminarTarea(1);
console.log(tareas);