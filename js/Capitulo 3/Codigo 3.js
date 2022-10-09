// class animales {
// 	constuctor(especie, edad, color){
// 		this.especie = especie;
// 		this.edad = edad;
// 		this.color = color;
// 		thi s.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
// 	}
// 	verInformación = ()=>{
// 		document.write(this.info)
// }

// perro = new animal("perro",5, "marrón");
// gato = new animal("gato",2, "negro");
// pajaro = new animal("pajaro",1, "verde") ;

// document.write(perro.info);
// document.write(gato.info);
// document.write(pajaro.info); 

// perro.verInformación();
// gato.verInformación();
// pajaro.verInformación(); 



class Celular{
	constructor(color,peso,tamano,pdc,ram) {
		this.color = color;
		this.peso = peso;
		this.tamano = tamano ;
		this.resolucionDeCamara = pdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}
	presionarBotonEncendido (){
		if(this.encendido == false){
			alert("celular prendido");
			encendido = true;
		}else {
			alert("celular apagado");
			this.encendido = false;
		}
	}
	reiniciar(){
		if(this.encendido == true){
			alert("el celular se esta reiniciando");
		} else{
			alert("el celular esta apagado");
		} 
	}
	tomarFoto(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`video grabado en ${this.resolucionDeCamara}`);
	}
	mobileInfo(){
		return `
		Color: <b> ${this.color}</b> </br>
		Peso:<b>${this.peso} </b>   </br>
		Tamaño:<b>${this.tamano} </b>  </br>
		Resolución de Video:<b>${this.resolucionDeCamara}</b>     </br>
		Memoria Ram: <b>${this.memoriaRam}</b>  </br>`;
	}
}

let celular1 = new Celular("rojo","150g","5","full hd","2GB");
let celular2 = new Celular("negro","120g","6","hd","4GB");
let celular3 = new Celular("verde","158g","7","4k","8GB");




//
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();


document.write(`
${celular1.mobileInfo()}<br>
${celular2.mobileInfo()}<br>
${celular3.mobileInfo()}<br>`);





























