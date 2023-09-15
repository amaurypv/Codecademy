//los objetos son colecciones de propiedades y
//propiedad es una asociacion entre nombre 
//o clave y un valor

// para generar un objeto 

// var datos={ //se debe de asignar una variable y abrir un corchete
// 	nombre:"amaury",
// 	apellido:"perez",
// 	edad:"37",
// 	pass:"1234"
// };


//para añadir una propiedad a un objeto existente

// datos.sex="masculino"
// console.log(datos)


// //para eliminar una propiedad existente. 

// delete datos.sex
// console.log(datos)


// para invocar una propiedad de un objeto
//hay 2 formas 

//dot notation
// console.log(datos.nombre)

// //bracket notation
// console.log(datos["nombre"]) //debe de ir siempre entre comillas""

//para combinar diferentes objetos se utiliza el spread ...
const uno={a:1,b:2}
const dos={c:3,d:4}
const tres={e:5,f:6}
//para combinar las 3
const combinado={...uno,...dos,...tres}
console.log(combinado) //imprime { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }


/* metodos en objetos 
un metodo es una funcion dentro de un objeto como
propiedad*/

// var datos={
// 	nombre:"mateo",
// 	apellido:"perez",
// 	nombrecompleto: function(){ //siempre debe de llevar la palabra function() y abrir corchetes
// 		return(this.nombre +" "+ this.apellido) //la palabra "this" hace referencia a un elemento dentro del objeto 
// 	}
// };
// console.log(datos)

// console.log(datos.nombrecompleto()) //para invocar este elemento(cuando lleve funcion)
//                                      //se debe de poner despues del elemento los parentesis()
// console.log(datos["nombrecompleto"]()) //es lo mismo solo que con el metodo bracket notation 



//  // loops en objetos
// var usuario={
// 	nombre:"amaury",
// 	apellido:"perez",
// 	edad:"37 años",
// 	pass:"12345"
// };
//  for(var clav in usuario){ //se debe de definir una variable seguido de in y el nombre del objeto
//  	console.log(clav); //
//  	console.log(usuario[clav]);
//  }


//ejemplo de usar function() de forma general en diferentes objetos
//primero se defino la funcion
function saludar(){
	console.log("hola "+ this.nombre)
}


// //despues se defienen los objetos
var amaury={
	nombre:"amaury",
	apellido:"perez",
	saludo:saludar,
};

console.log(amaury.saludo())

var mateo={
	nombre:"mateo",
	apellido:"perez",
	saludo:saludar,
}	

//console.log(mateo	.saludo())

//destructuring
//se toma un objeto y se definen sus llaves 
const {nombre,apellido}=mateo
console.log(nombre) //imprime mateo

