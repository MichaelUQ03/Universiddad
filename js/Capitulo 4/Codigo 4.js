// let cadena = "cadena de prueba";
// let cadena2 = " cadena 2";
// resultado = cadena.concat(cadena2);
// document.write(resultado);


// let cadena = "cadena de pruebawa";
// let cadena2 = "cadena";
// let cadena3 = "cadena 2";
// let cadena4 = "awa";

// resultado = cadena.startsWith(cadena2);
// resultado2 = cadena.startsWith(cadena3);

// document.write(resultado + " <br> <br>");
// document.write(resultado2 + " <br>");

// resultado3 = cadena.endsWith(cadena2);
// resultado4 = cadena.endsWith(cadena4);

// document.write(resultado3 + " <br> <br>");
// document.write(resultado4);


// let cadena = "me gusta mucho el anime";
// let cadena2 = "el";
// let cadena3 = "uwu";

// resultado = cadena.includes(cadena2);
// resultado2 = cadena.includes(cadena3);

// document.write(resultado + " <br> <br>");
// document.write(resultado2);



// let cadena = "ola";
// let cadena2 = "";
// resultado = cadena.padStart(6,"!");
// resultado2 = cadena.padEnd(10,"!");
// resultado3 = cadena.repeat(3);
// document.write(resultado+ "<br>");
// document.write(resultado2+ "<br>");
// document.write(resultado3+ "<br>");

//------------------------------------------------------------------

// class Calculadora {
//     constructor() {
//     }
//     suma (num1, num2){
//         return parseInt(num1) + parseInt(num2);
//     }
//     resta (num1, num2){
//         return parseInt(num1) - parseInt(num2);
//     }
//     division(num1, num2){
//         return parseInt(num1) / parseInt(num2);
//     }
//     multiplicacion(num1, num2){
//         return parseInt(num1) * parseInt(num2);
//     }
//     potencia(num, exp){
//         return num ** exp;
//     }
//     raizCuadrada(num){
//         return Math.sqrt(num);
//     }
//     raizCubida(num){
//         return Math.cbrt(num);
//     }
// }
//
// let calculadora = new Calculadora();
//
// alert('Que operacion desea realizar?');
//
// let operacion = prompt("1: Suma,2:Resta, 3:division, 4:multiplicacion, 5:Potenciacion, 6:RaizCuadrada, 7: RaizCubica");
//
// if (operacion === "1"){
//     numero1 = prompt('Ingrese el numero 1');
//     numero2 = prompt('Ingrese el numero 2');
//     resultado = calculadora.suma(numero1,numero2);
//     alert(`El resltado es ${resultado}`);
// }
// else if (operacion === "2"){
//     numero1 = prompt('Ingrese el numero 1');
//     numero2 = prompt('Ingrese el numero 2');
//     resultado = calculadora.resta(numero1,numero2);
//     alert(`El resltado es ${resultado}`);
// }
// else if (operacion === "3"){
//     numero1 = prompt('Ingrese el numero 1');
//     numero2 = prompt('Ingrese el numero 2');
//     resultado = calculadora.division(numero1,numero2);
//     alert(`El resltado es ${resultado}`);
// }
// else if (operacion === "4"){
//     numero1 = prompt('Ingrese el numero 1');
//     numero2 = prompt('Ingrese el numero 2');
//     resultado = calculadora.multiplicacion(numero1,numero2);
//     alert(`El resltado es ${resultado}`);
// }
// else if (operacion === "5"){
//     numero1 = prompt('Ingrese el numero 1');
//     numero2 = prompt('Ingrese el numero 2');
//     resultado = calculadora.potencia(numero1,numero2);
//     alert(`El resltado es ${resultado}`);
// }
// else if (operacion == "6"){
//     numero1 = prompt('Ingrese el numero');
//     resultado = calculadora.raizCuadrada(numero1);
//     alert(`El resltado es ${resultado}`);
// }
// else if (operacion == "7"){
//     numero1 = prompt('Ingrese el numero');
//     resultado = calculadora.raizCubida(numero1);
//     alert(`El resltado es ${resultado}`);
// }
// else{
//     alert('error')
// }
//------------------------------------------------------------

const obtenerInfo = (materia)=>{
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","juan","pepito","cofla"],
        logica: ["Rodriguez","pedro","juan","pepito","cofla","maria"],
        quimica:  ["A","pedro","juan","pepito","cofla","maria"]
    }

    if (materias[materia] !== undefined){
        return [materias[materia],materia];
    } else {
        return false;
    }
}

const mostrarInfo = (materia)=>{
    let info = obtenerInfo(materia);
}
if (infomacion !== false){
    let profesor = info[0][0];
    let alumno = info[0];
    alumno.shift();
    document.write(`El profesor de ${info[1]} es ${profesor} Los alumnos son: ${alumno}`);
}

mostrarInfo('fisica');
mostrarInfo('programacion');
mostrarInfo('logica');
mostrarInfo('quimica');



















