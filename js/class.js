/* para generar una clase se crea un funcion especial 
por convención todos los nombres de un constructor de clases debe de iniciar con mayuscula
en donde se utiliza la palabta "this" aunque esta no haga referenci a ninugun 
objeto. el nombre de la funcion seria el nombre de la clave y entre parentesis 
llevaria argumentos. a diferencia de crear los objetos de forma manual, los valores de 
cada elementro dentro del objeto no se definirá con : (dos punto), se definirá con =(igual)
para utilizar este constructor de objetos, se utiliza la palaba new. 
primero se define el nombre del objeto y se da igual a la palabra new seguido del 
nombre de la funcion y los parentesis junto con los argumentos que se quiera cambiar. 
en el resultado a un lado al momento de invocar el objeto nos mostrará si el objeto fue 
creado a partir de un constructor de objetos. si fue ese el caso pondrá el nombre del 
constructor de objetos.*/

// function Carros(marca, modelo, año, color) {
// 	this.marca=marca,
// 	this.modelo=modelo,
// 	this.año=año,
// 	this.color=color
// };

// var audi= new Carros("audi","A5",2022,"negro");

// var jetta= new Carros("VW","jetta",2021,"azul")

// var corola=new Carros("toyota","corola",2019,"gris")

// console.log(audi)
// console.log(jetta)
// console.log(corola)


/*existe una manera mas nueva de generar una clase. el metodo es6. 
Este es un método más nuevo ya que es mas facil de hacer. 
se inicia con la palabra "class" seguido por el nombre de la clase que se va a generar
y se abren corchetes {} dentro de los corchetes va la palabra "constructor () y corchetes{}" 
y dentro de los parentesis va las propiedades.  
para generar un objeto por este metodo, se hace la misma forma que el metodo anterior.*/

class Autos{
	constructor(marca,modelo,año){
	this.marca=marca;
	this.modelo=modelo;
	this.año=año
}
}

var mercedes = new Autos("Mercedes Benz","A304",2021)
console.log(mercedes)

var jetta= new Autos("Volkswagen","jetta",2020)
console.log(jetta)


