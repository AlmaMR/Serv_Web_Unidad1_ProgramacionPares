//16 Crea una función que valide si una cadena de texto es un correo electrónico válido.

//ABRIMOS UN CUADRO DE DIALOGO PIDIENDO UN CORREO ELECTRONICO PARA VALIDAR
let correo = prompt("Ingresa un correo electronico.");
//DFINIMOS COMO CONSTANTE UNA EXPRESION REGULAR UTILIZADA PARA EVALUAR CORREOS ELECTRONICOS
const validacionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//HACEMOS USO DEL MÉTODO .test() PARA EVALUAR SI EL CORREO INGRESADO CUMPLE CON LA EXPRESION REGULAR
//ESTE MÉTODO SE UTILIZA PARA EVALUAR SI UNA CADENA DE TEXTO CUMPLE CON UNA EXPRESION REGULAR Y RETORNA UN VALOR 
//TURE O FALSE EN BASE AL RESULTADO.

console.log(correo);
if (validacionCorreo.test(correo)) {//IMPRIMIMOS EN CONSOLA SI EL CORREO ES VALIDO O NO DE ACUERDO A LA EVALUACIÓN

    console.log("El correo ingresado es valido.");

} else {

    console.log("El correo ingresado no es valido.");

}
