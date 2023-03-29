/* PROTOTYPE. 
Se utiliza prototype para querer agregar algun dato a un objeto el cual ya se 
genero por medio de un this y new. 
se agrega con la siguiente sintaxis 
se pone el nombre del objeto que se creó con anterioridad seguido por un punto(.)
la palalabra prototype seguido por un punto (.) y el nombre de lo que queremos agregar. 
se pueden agregar datos y funciones. */

//primero creamos una clase a patir de la forma this y new
function autos (marca,modelo,año){
	this.marca=marca,
	this.modelo=modelo,
	this.año=año
}

var jetta= new autos("volkswagen","jetta",2015)
var mercedes= new autos("meredes benz","seria A",2021)

console.log(mercedes)


// vamos a generar un prototype en donde se cree una funcion diciendo si el carro es 
//premium o no 

autos.prototype.premium= function(){
	if (this.marca==="audi" || this.marca==="meredes benz" || this.marca==="BMW"){
		return("este auto es premium")
	}else{
		return("este auto no es premium")
	}
}
var bm= new autos("BMW","204 I",2022)

//es importante mencionar que el prototype no aparece si solo invocas el objeto. 
//para invocarlo, tienes que llamar el objeto y el atributo especifico del prototype.
// lo importante del prototype es que incluso te puede generar el dato aun despues 
// de que hayas generado la variable. 

console.log(bm.premium())
console.log(mercedes.premium())
console.log(jetta.premium())