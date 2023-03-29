/*los objetos se utilizan para asignar variables de cualquier tipo. 
para definir un objeto se usa los braces {} y se define de la siguiente manera:

let nuevo={};   este es un objeto vacio

los objetos se llenan por una llave y su valor. la llave puede ser 
cualquier tipo incluido funciones u objetos. 
 se deije la llave y para añadir su valor se sigue por dos puntos (:)
 la llave puede ser incluso una cadena si necesidad de definirla como cadena 
 para definir una segunda llave en el objeto, se define por una coma (,). ejemplo 

 let gasolinerass={oxxo:21.5, petro7:22.0}
*/

const gasolineras={
	oxxogas:'$21.5',
	petro7:'$22.0',
	tanquelleno(){
		return `${this.oxxogas} es el valor`
	}
};

// //para accesar a la propiedad de un objeto. se puede accesar por medio del punto(.)

// console.log(gasolineras.petro7)  // imprime $22.00 ya que es el precio que maneja en el arreglo 
//  //incluso se puede asignar una variable al valor 
//  const masbara=gasolineras.oxxogas
//  console.log(masbara)   //imprimo $21.5

// /*otra forma de invocar un elemento de un objeto es con brackets. 
// esta forma de invocar se utiliza cuando los elementos del objeto son funciones ya que 
// es mas facil invocarlos. solo que ademas de invocar el elemento debe de llamarse la funcion
// entre comillas */

// console.log(gasolineras['oxxogas'])  //imprime $21.50

/* se pueden agregar nuevos elemntos a los objetos aun incluso si la variable se 
definió como constante, recordar que es mutable, mas no se puede cambiar 
totalmente. 
la forma en que se puedan agregar es por medio de punto o con brakets.
si el elemento ya existe, se cambia el valor del elemento. si no existe se genera uno 
nuevo. */

gasolineras.carvel='$23.5'

gasolineras['pemex']='$23.00'

// console.log(gasolineras)  //imprime {oxxogas: '$21.5', petro7: '$22.0', carvel: '$23.5', pemex: '$23.00'}
// //para cambiar el valor de pemex
// gasolineras.pemex='$24.00'

// console.log(gasolineras)  //imprime {oxxogas: '$21.5', petro7: '$22.0', carvel: '$23.5', pemex: '$24.00'}

// gasolineras['oxxogas']='$25.00'
// console.log(gasolineras)


// //tambien se puede eliminar un elemento con la palabra delete al inicio

// delete gasolineras.carvel
// console.log(gasolineras) //imprime {oxxogas: '$25.00', petro7: '$22.0', pemex: '$24.00'}
// 						// porque se elimnino carvel 


/* los objetos tambien aceptan funciones, solo que no se llaman funciones se llaman 
metodos. y se definenn de la siguiente manera.*/ 
// const saludar={
// 	saludo(){                    //con el metodo ES6 se define el nombre y se abren parentesis
// 								// y se abre una llave como cualquier funcion 
//  		console.log('hola mi nombre es ')
// 	},
// 	nombre:"amaury",
// 	saludocomp(){
// 		console.log(`hola mi nombre es ${this.nombre}`)
// 	}
// }

// gasolineras["black gold"]='$21.00'
// console.log(gasolineras)


//cuando se quiere invocar como es un metodo en el caso de la forma de punto(.) se abre y cierra parentesis


// console.log(saludar.saludo())  //imprimekey: "value",  hola mi nombre es 
// let spaceship = {
//   passengers: null,
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032 
//   },
//   crew: {
//     captain: { 
//       name: 'Sandra', 
//       degree: 'Computer Engineering', 
//       encourageTeam() { console.log('We got this!') },
//      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//   },
//   engine: {
//     model: "Nimbus2000"
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD"
//     },
//     'back-up': {
//       battery: "Lithium",
//       terabytes: 50
//     }
//   }
// }; 
// const capFave=spaceship.crew.captain["favorite foods"][0];
// spaceship.passengers=[{name:'dra'}]
// const firstPassenger=spaceship.passengers[0]

// /*si el objeto esta definido como let o incluso como const se pueden hacer cambios 
//  con funciones */
// const spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };
// console.log(spaceship)
// // Write your code below
// let greenEnergy=(objeto)=>{objeto["Fuel Type"]="avocado oil"
// }
// let remotelyDisable=(nuevo)=>{
//   nuevo.disabled=true
// }

// greenEnergy(spaceship)
// remotelyDisable(spaceship)
// console.log(spaceship)

// para iterar objetos se utiliza el for-in 
//se abre el for(let variable in objeto)
//la varible se define y el objeto se puede tomar desde un objeto, hasta el elemento 
// del objeto 



//--------------------------------------------------------------------------------

//iteracion en un objeto

// let spaceship = {
//     crew: {
//     captain: { 
//         name: 'Lily', 
//         degree: 'Computer Engineering', 
//         cheerTeam() { console.log('You got this!') } 
//         },
//     'chief officer': { 
//         name: 'Dan', 
//         degree: 'Aerospace Engineering', 
//         agree() { console.log('I agree, captain!') } 
//         },
//     medic: { 
//         name: 'Clementine', 
//         degree: 'Physics', 
//         announce() { console.log(`Jets on!`) } },
//     translator: {
//         name: 'Shauna', 
//         degree: 'Conservation Science', 
//         powerFuel() { console.log('The tank is full!') } 
//         }
//     }
// }; 
//  for (let puestos in spaceship.crew) //se define la variable y despues se busca 
//  	console.log(puestos)             // en el objeto a partir de donde se quiera iniciar

// para imprimir solo las gasolineras en el objeto gasolinera
// for (let gas in gasolineras){  //se define una variable en este caso "gas" y se busca en  
// 	console.log(gas)          // en el objeto gasolineras
// }
// imprime
// oxxogas
//  petro7
//  carvel
//  pemex
//  black gold

//--------------------------------------------------------------------------------

//la plabra .this se utiliza para invocar el valor de un objeto o funcion dentro de ese objeto. 

// const saludo={
// 	nombre:'amaury',
// 	apellido:'perez',
// 	edad:38,
// 	completo(){
// 		return `hola mi nombre completo es es ${this.nombre} ${this.apellido} y tengo ${this.edad}años`  
// 		 //se tiene que poner .this para que agarre el valor dentro el objeto
// 	}
// }


// console.log(saludo.completo())

//--------------------------------------------------------------------------------
//getter se usa para simplificar la forma de crear funciones y de invocarlas. 
//se utiliza tambien para generar funciones con condiciones if
// const saludo={
// 	nombre:'amaury',
// 	apellido:'perez',
// 	edad:38,
// 	get completo(){  //se pone la palabra get 
// 		return `hola mi nombre completo es es ${this.nombre} ${this.apellido} y tengo ${this.edad}años`  
// 		 //se tiene que poner .this para que agarre el valor dentro el objeto
// 	}
// }

// console.log(saludo.completo) //para invocarla ya no se necesitan los parentesis (). 


// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   get energyLevel(){
//     if(typeOf(this._energyLevel)==='number'){
//       return `My current energy level is ${this._energyLevel}` 
//     }
//   }
// };

// robot.energyLevel

//tambien se pueden generar metodos con if 

// const variables={
// 	_nombre:'amaury',
// 	_apellido:'perez',
// 	edad:38,
// 	get completo(){
// 		if(this._nombre && this._apellido){
// 			return `nombre completo es ${this._nombre} ${this._apellido}`
// 		}	}
// 	}


// console.log(variables.completo)

//--------------------------------------------------------------------------------
//setter se utiliza para reasignar valores dentro de un objeto en un metodo. 
//ejemplo se pide cambiar el valor de "edad" si en el metodo "calculo" el argumento 
// //"numero" es un numero, entonces cambia el valor del  
// const valores={
// 	edad:40,
// 	set calculo(numero){
// 		if(typeof(numero)==='number'){
// 			this.edad=numero    //cambiar el valor de "edad" si cumple con la condicion
// 			}else{
// 			console.log('poner numero')
// 		}
// 	}
// }
// console.log(valores.edad)//imprimer 40
// valores.calculo=37  //para cambiar el valor de "edad" mediante el metodo "calculo"
// console.log(valores.edad)   //imprime 37, cuando inicialmente el valor era de 38


//--------------------------------------------------------------------------------
/* para crear un objeto a traves de una plantilla se tiene que definir como una funcion.*/ 

// const carros=(marca,modelo,año,color)=>{  //se usa como una funcion de flecha ES6
// 	return{             //se tiene que poner return despues de poner los parametros
// 		marca:marca,
// 		modelo:modelo,
// 		año:año,
// 		color:color,
// 		resumen(){  //metodos (funcion dentro del objeto)
// 			if(marca==="audi"|| marca==='mercedes benz'){
// 				console.log('tu auto es premium')
// 			}else{
// 				console.log('tu auto es X')
// 			}
// 		}
// 	}
// }

// const a4=carros('audi','A4','2022','negro') //para generar un objeto a partir de una plantilla
// // se define el nombre del objeto se da igual (=) se pone el nombre de la plantilla y se llenan los 
// //argumentos
// console.log(a4.resumen()) //imprime "tu auto es premium"

// const mb=carros('mercedes benz','A300',2021,"blanco")

// console.log(mb.marca) //imprime 'mercedes benz'

// const nb=carros('volkswagen','New Beetle',2002,'rojo')
// console.log(nb.resumen())  //imprime tu auto es X

//--------------------------------------------------------------------------------
/* para crear objetos se pueden generar a partir de una forma mas reducida. 
en lugar de poner la llave y el valor, ambos se llaman igual, solo poner es nombre de la llave
y lo separas por una coma, el argumento se debe de llamar igual que la llave. */


// const tennis=(marca,modelo,numero,precio)=>{
// 		return{
// 		marca,
// 		modelo,
// 		numero,
// 		precio,
// 		resumen(){ 
// 			if(marca==="nike"|| marca==='adidas'){
// 				console.log('ah perro tienes unos nike')
// 			}else{
// 				console.log('nahh')
// 			}
// 		}
// 		}
// }

// const air1=tennis('nike','jordan1','9.5',6000);

// console.log(air1.marca)


// const pumaking=tennis('puma','king','29',5000)
// console.log(pumaking.resumen())
//--------------------------------------------------------------------------------

/* se pueden obtener variables a traves de destructured 
se definen de la siguiente manera: */

// const {marca}=air1
// console.log(marca)

// const jordans=air1.marca
// console.log(jordans)
//--------------------------------------------------------------------------------
//se pueden crear arreglos a partir de las llaves de un objeto con Object.keys()

// const losjordan=Object.keys(pumaking);

// console.log(losjordan)

//--------------------------------------------------------------------------------

//se pueden conjuntar dos objetos y tomar las variables del otro en caso de que se repitan 
//las llaves con Objetc.assign()

// const numeros1={
// 	a:1,
// 	b:3,
// 	c:5,
// 	d:6
// };

// const numero2={
// 	a:1,
// 	b:3,
// 	c:4,
// 	d:7

// }

// const numeros3=Object.assign(numeros1,numero2)

// console.log(numeros3)

//--------------------------------------------------------------------------------
// ejercicio de objetos 
/*

We’ll hold the meal, price, and their respective getters and setters in an object named menu.
In app.js, create an empty menu object.


The menu object will hold the meal and price of Today’s Special as 
properties and they shouldn’t be altered directly.
Within the menu object, create a _meal property with a value of an empty string ('')
 This will eventually hold the name of the meal.


Next, add a _price property with a value of 0. 
This will eventually hold the price of the meal, and should also not be altered directly.


We know properties that begin with _ should not be directly manipulated. But just to validate this knowledge, 
let’s test it out!

Below the menu object, directly manipulate the two properties by assigning _meal a number
value and _price a string value.
Then, below the new assignments, console.log() the menu object to see how not 
type checking these values could cause confusion for a website visitor!


To safely reassign the two menu properties, we can add setters that type check the values being assigned.

Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter.
Leave the function body empty for now.

In the body of the setter method, create an if statement that checks if mealToCheck is a string.
If it is, return the object’s _meal property with mealToCheck assigned as the value.

Utilizing the same procedures as above, use the set keyword to create a price setter with priceToCheck as a parameter. 
This method should make sure the value associated with _price is always a number



Below the menu object, set the values of _meal and _price using the newly created setter methods. 
Then, console.log() the menu object to check their functionality


Now it’s time to safely return the values of the _meal and _price properties in a readable form. 
Instead of directly accessing the properties, we can use a getter method that proactively
checks if a meal and price have been properly set, before returning the values.
Below the setters, use the get keyword to create a todaysSpecial method. 
Leave the function body empty for now.


In the body of the getter, create an if…else statement to check if _meal 
and _price values exist (or are truthy values). If so, return a string telling potential
website visitors what Today’s Special is. For example: “Today’s Special is Spaghetti for $5!”
If _meal and _price values do not exist (or are falsy) 
return the string 'Meal or price was not set correctly!'.
*/

// const menu={
// _meal:'',
// _price:0,
// set meal(mealToCheck){
//   if(typeof(mealToCheck)==='string'){
//     return this._meal=mealToCheck
//   }
// },
// set price(priceToCheck){
//   if(typeof(priceToCheck)==='number'){
//     return this._price=priceToCheck
//   }
// },
// get todaysSpecial(){
//   if(Boolean(this._meal)===true && Boolean(this._price)===true){
//     return (`Today’s Special is ${this._meal} for ${this._price}`)
//   }else{
//     return (`Meal or price was not set correctly!`)
//   }
// }
// }
// menu.meal='pizza';
// menu.price=30;
// console.log(menu.todaysSpecial)

//--------------------------------------------------------------------------------




