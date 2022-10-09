// nombre  = "Michael";

// frase = `Soy ${nombre} 
// y estoy caminando`;

// let nombre = prompt('Dime tu nombre:');
//  if (nombre == "Michael") {
//  	alert('a')
//  }

//  else if (nombre == "David") {
//  	alert('b')
//  }

//  else {
//  	alert('tu nombre vale verga xD')
//  }

 dinero1 = prompt('Cuandot dinero tienes cofla:');
 dinero2 = prompt('Cuandot dinero tienes roberto:');
 dinero3 = prompt('Cuandot dinero tienes pedro:');
 dinerocofla = parseInt(dinero1);
 dineroroberto = parseInt(dinero2);
 dineropedor = parseInt(dinero3);

 //cofla 
 if (dinero1 >= 0.6 && dinero1 < 1) {
 	alert("cofla, Comprate un helado de agua");
 	alert('te sobran' + (dinerocofla - 0.6));
 }

 else if (dinero1 >= 1 && dinero1 < 1.6) {
 	alert("cofla, Comprate un helado de crema" );
 	alert('te sobran' + (dinerocofla - 1));
 }

 else if (dinero1 >= 1.6 && dinero1 < 1.7) {
 	alert("cofla, omprate un helado de heladix" );
 	alert('te sobran' + (dinerocofla - 1.6));
 }

 else if (dinero1 >= 1.7 && dinero1 < 1.8) {
 	alert("cofla, Comprate un helado de heladovich" );
 	alert('te sobran' + (dinerocofla - 1.7));
 }

 else if (dinero1 >= 1.8 && dinero1 < 2.9) {
 	alert("Cofla, comprate un helado de helardo  " );
 	alert('te sobran' + (dinerocofla - 1.8));
 }

else if (dinero1 > 2.9 ) {
	alert('cofla, Comprate un helado de confeti o un pote de 1kg');
	alert('te sobran' + (dinerocofla - 2.9));
}

else {
	alert('No te alcanza para nada pobre de mierda');
}

//roberto

 if (dinero2 >= 0.6 && dinero2 < 1) {
 	alert("roberto, Comprate un helado de agua");
 	alert('te sobran' + (dineroroberto - 0.6));
 }

 else if (dinero2 >= 1 && dinero2 < 1.6) {
 	alert("roberto, Comprate un helado de crema" );
 	alert('te sobran' + (dineroroberto - 1));
 }

 else if (dinero2 >= 1.6 && dinero2 < 1.7) {
 	alert("roberto, omprate un helado de heladix" );
 	alert('te sobran' + (dineroroberto - 1.6));
 }

 else if (dinero2 >= 1.7 && dinero2 < 1.8) {
 	alert("roberto, Comprate un helado de heladovich" );
 	alert('te sobran' + (dineroroberto - 1.7));
 }

 else if (dinero2 >= 1.8 && dinero2 < 2.9) {
 	alert("roberto, comprate un helado de helardo  " );
 	alert('te sobran' + (dineroroberto - 1.8));
 }

else if (dinero2 > 2.9 ) {
	alert('roberto, Comprate un helado de confeti o un pote de 1kg');
	alert('te sobran' + (dineroroberto - 2.9));
}

else {
	alert('No te alcanza para nada pobre de mierda');
}

//pedro

 if (dinero3 >= 0.6 && dinero3 < 1) {
 	alert("pedro, Comprate un helado de agua");
 	alert('te sobran' + (dineropedor - 0.6));
 }

 else if (dinero3 >= 1 && dinero3 < 1.6) {
 	alert("pedro, Comprate un helado de crema" );
 	alert('te sobran' + (dineropedor - 1));
 }

 else if (dinero3 >= 1.6 && dinero3 < 1.7) {
 	alert("pedro, omprate un helado de heladix" );
 	alert('te sobran' + (dineropedor - 1.6));
 }

 else if (dinero3 >= 1.7 && dinero3 < 1.8) {
 	alert("pedro, Comprate un helado de heladovich" );
 	alert('te sobran' + (dineropedor - 1.7));
 }

 else if (dinero3 >= 1.8 && dinero3 < 2.9) {
 	alert("pedro, comprate un helado de helardo  " );
 	alert('te sobran' + (dineropedor - 1.8));
 }

else if (dinero3 > 2.9 ) {
	alert('pedro, Comprate un helado de confeti o un pote de 1kg');
	alert('te sobran' + (dineropedor - 2.9));
}

else {
	alert('No te alcanza para nada pobre de mierda');
}

