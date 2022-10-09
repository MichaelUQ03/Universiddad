// let arrays = {
// 	nombre: "maicol",
// 	apellido: "cerrud"}

// let nombre = arrays["nombre"]
// let apellido = arrays["apellido"]

// frase = `Mi nombre es ${nombre} y mi apellido es ${apellido}`;

// document.write(frase)



// let numero = 0

// while (numero < 100)/*debe ser true*/ {

// 	numero++

// 	document.write(numero + "<br>")
// 	if (numero == 10) {
// 		break; 
// 	}
// }

// document.write('fin')



// for (let i = 0; i < 5; i++){
	
// 	if (i == 2) {
// 	continue; 
// 	}

// 	document.write(i + "<br>");
// }


// let animales = ["perro", "gato", "pajaro"];
// animales.edad = 20;

// for (animal in animales){
// 	document.write(animal + "<br>");
// }

// document.write("<br>")

// for (animal of animales){
// 	document.write(animal + "<br>");
// }



// let array1 = ['a', 'b', 'c'];
// let array2 = ['d', 'e', array1, 'f']

// forX:
// for (let array in array2){

// 	if (array == 2 ){

// 		for (let array of array1) {
// 			document.write(array + '<br>');
// 			break forX;
// 		}

// 	}
// 	else{
// 		document.write(array2[array] + "<br>");

// 	}
// }


// function suma(num1, num2){

// 	let suma = num1 + num2;
// 	return suma;
// }

// let res = suma(1,45);

// document.write(res);



// const saludar = function (nombre){
// 	let frase = `Hola ${nombre}! como estas?`;
// 	document.write(frase)
// }
// saludar("michael")



// const saludar = (nombre) => {
// 	document.write("como estas " + nombre);}

// saludar("michael")


// let free = false;

// const validar = (time)=> {
// 	edad = prompt("ingresa tu edad ");
// 	if (edad > 18){
// 		if(time >=2 && time <7  && free == false){
// 			alert("podes pasar gratis");
// 			free = true;
// 		}
// 		else{
// 			alert(`son las ${time}, podes pasar pero tienes que pagar mongolo`);
// 		}
// 	} else {
// 		alert("Mira eres menore andate a la mierda");
// 	}
// } 

// validar(2);
// validar(6.50);
// validar(16);



// let cantida = prompt("Cuantos alumnos son? ");
// let cantidaAlum = [];


// for(let i = 0; i < cantida; i++){
// 	cantidaAlum[i] = [prompt('Nombre del alumno ' + (i + 1)),0]; 
// }


// const asistencia  =  (nombre, p )=> {
// 	let asis = prompt(nombre);
// 	if (asis == "p"  || asis == "p"  ){
// 		cantidaAlum[p][1]++;
// 	}
// }

// for (let i = 0; i <30; i++){
// 	for(alunmo in cantidaAlum){
// 		asistencia(cantidaAlum[alunmo][0], alunmo);
// 	}
// } 

// for (alunmo in cantidaAlum){
// 	let resultado = `${cantidaAlum[alunmo][0]}:
// 	________ Presentes: ${cantidaAlum[alunmo][1]} 
// 	________ Ausencias: ${30 - cantidaAlum[alunmo][1]}`

// 	if(30 - cantidaAlum[alunmo][1] >18){
// 		resultado += "Reprobado por inasistencia"; 
// 	}
// 	else{
// 		resultado += "<br>";
// 	}
// 	document.write(resultado);
// }



const suma = (num1, num2)=>{
	 return parseInt(num1) + parseInt(num2);
}

let resta = (num1, num2)=>{
	 return parseInt(num1) - parseInt(num2);
}

let division = (num1, num2)=>{
	 return parseInt(num1) / parseInt(num2);
}

let multiplicacion = (num1, num2)=>{
	 return parseInt(num1) * parseInt(num2);
}

alert('Que operacion desea realizar?');

let operacion = prompt("1: Suma,2:Resta, 3:division, 4:multiplicacion");

if (operacion == "1"){
	numero1 = prompt('Ingrese el numero 1');
	numero2 = prompt('Ingrese el numero 2')
	resultado = suma(numero1,numero2);
	alert(`El resltado es ${resultado}`);
}
else if (operacion == "2"){
	numero1 = prompt('Ingrese el numero 1');
	numero2 = prompt('Ingrese el numero 2')
	resultado = resta(numero1,numero2);
	alert(`El resltado es ${resultado}`);
}
else if (operacion == "3"){
	numero1 = prompt('Ingrese el numero 1');
	numero2 = prompt('Ingrese el numero 2')
	resultado = division(numero1,numero2);
	alert(`El resltado es ${resultado}`);
}
else if (operacion == "4"){
	numero1 = prompt('Ingrese el numero 1');
	numero2 = prompt('Ingrese el numero 2')
	resultado = multiplicacion(numero1,numero2);
	alert(`El resltado es ${resultado}`);
}
else{
	alert('error')
}

































