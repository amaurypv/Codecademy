

//Metoddos

// .trim() se utiliza para eliminar los espacios de una string en el principio y en el final. 

// var espacios= "        Hola, como estas        "
// var sinespacios=espacios.trim()
// console.log(sinespacios)

//expect  Hola, como estas

//------------------------------------------------------------------------
// .endsWith() 
// nos dice si una cadena termina con la palabra que se pone dentro de los parentesis
// si la cadena termina con esa palabra arroja true, si no, arriba false

// var termina="hola, como estas"
// console.log(termina.endsWith("estas"))

//expect True

//------------------------------------------------------------------------

//includes() 
// nos sirve para saber si la palabra que va dentro de los parentesis se encuentra dentro de la cadena. 

// var saludo="hola que tal, como te va"
// console.log(saludo.includes("va"))

//expect True
//------------------------------------------------------------------------
//math.random()
/* para generar un numero entre 0 y 1 se tiene el metodo math.random()
pero si se quiere entre algun rango, se tiene que poner en el principio el numero mas pequeño 
y el sigo de mas (+)y multiplicar el metodo math.random() por el numero mayor (*) 
si se quiere numeros enteros se utiliza el metodo floor
*/


// console.log(Math.random()) //retorna un un numero random entre 0 y 1 se debe de poner Math con la primera mayuscula

// console.log(+(Math.random()*2)) //retornar un numero entre 0 y 2 

// console.log(Math.floor((Math.random())*100)) // imprime un valor entero random entre 0 y 100 

//------------------------------------------------------------------------

//se puede definir una varia de 3 formas 
//let (es con el sistema ES6)
//var con el sistema inciial de js 
// const cuando se define una variable pero no se puede modificar su valor 

// var carro="rojo"
// let auto="azul"
// const valorpi=3.1416


//------------------------------------------------------------------------
//algoritmo para saber si un numero es primo y los multiplos de los numeros que no son primos
// var number=22 //ingresar el numero 
// var primo=0
// for (var i=2;i<number;i++){
// 		if((number%i)===0){
// 			console.log(i)
// 			primo=1
// 		}
		
// 	}
// 	if (primo===0){
// 		console.log("es primo")
// }
//------------------------------------------------------------------------

//para crear clases y prototype
// class usuario{
// 	constructor(nombre,edad,clase){  //siempre lleva la palabra constructor(){} y sus signos
//       this.nombre=nombre;
//       this.edad=edad;
//       this.clase=clase
// 	}
// }


// var juan= new usuario("juan",22,"mat")

// usuario.prototype.saludo=function(){  //para un prototype se pone el nombre del objeto segui de la palabra prototype y el nombre 
// 	console.log("hola, "+ this.nombre)  // del nuevo metodo se da igual= y la palabra function()
// }
//------------------------------------------------------------------------


// //para extrapolar valores de unas cadenas se utiliza el simnbolo `` (se encuentra en la techa de los corchetes) y las variables se invocan con ${}
// //este tipo de extrapolacion es mucho mas facil hacer cadenas largas usando variables definidas.
// let mascota="perro"
// let nombre= "titi"
// console.log(`mi mascota es un ${mascota} y su nombre es ${nombre}`)

//------------------------------------------------------------------------

// //para checar de que tipo es la variable se utiliza typepof 
// console.log(typeof("hola")) //devolvera "string"
// console.log(typeof(2)) //devolvera number 


//------------------------------------------------------------------------

// /*cortocircuito 
// se utiliza cuando se quiere declarar una variable y en caso de que la variable devuelva 
// un valor falso se utiliza el siguiente valor*/

// let tool = '';
// let writingUtensil=tool||"pen" // al imprimir la variable deteca que el primer valor es falso y toma el segundo 

// console.log(`The ${writingUtensil} is mightier than the sword.`);


// //------------------------------------------------------------------------
//  /*operador condicional ternario 
//  se utiliza en lugar del if pero solo para opciones de un valor verdero o falso*/

//  let falso=false
//  falso? console.log("es cierto"): //debe de ir siempre el signo de interrogacion 
//  console.log("es falso") //y la segunda opcion debe de ir despues de lso :
// //imprime "es falso"

// let seracierto=2
// seracierto? console.log("es cierto"): console.log("es falso")
// //imprimo "es cierto" porque el numero 2 es verdadero

// //aplica tambien para comparaciones 
// let compara="hola"
// compara==="hola"?console.log("si dice hola"):console.log("No dice hola")


//------------------------------------------------------------------------
// /*if, else if y else
// se utiiza cuando se necesita un condicional pero no solo de una opcion si no de dos o mas*/ 


// function examenes(calificacion){
// if(calificacion>=9 && calificacion<=10){
// 	console.log("excelente")
// }else if(calificacion>=8 && calificacion<=8.9){
// console.log("buena")
// }else if(calificacion>=7 &&calificacion<=7.9){
// 	console.log("regular")
// }else if(calificacion>=6 &&calificacion<=6.9){
// 	console.log("mal")
// }else if(calificacion>=0 && calificacion<=5.9 ){
// 	console.log("reprobado")
// }else{
// 	console.log("introduzca calificacion entre 0 y 10")
// }
// }


// examenes(8)

//------------------------------------------------------------------------
// /* switch 
// se utiliza como una alternativa para el else if*/

//  let athleteFinalPosition = 'first place';
// switch(athleteFinalPosition){       //se tiene que abrir brackets {}
// case('first place'):               //debe de llevar la palabra case () el caso 
// console.log('You get the gold medal!');			//que quiera llevar con la variable
//   													//seguido de dos puntos
//   break;						//siempre debe de terminar con la palabra "break"
//   case('second place'):
//   console.log('You get the silver medal!');
//   break;
//   case('third place'):
//   console.log('You get the bronze medal!')
//   break;
//   default:
//   console.log('No medal awarded.')
//   break;
// }

// //imprimira You get the gold medal!'


// let color="amarillo"
// switch(color){
// case("amarillo"):
// console.log("es amarillo");
// break;
// case("rojo"):
// console.log("es rojo");
// break;
// case("azul"):
// console.log("es azul");
// break;
// default:
// console.log("no existe el color");
// break;
// }

//------------------------------------------------------------------------
/*
funciones
las funciones se utilizan para crear un grupo de pasos para obtener un resultado 
en el metodo ES6 cambió la forma de generar funciones.
se define como una constante (const) y se nombra la funcion. se pone el signo igual 
y los parametros se ponenen entre parentesis, separados por coma, en caso de que no lleve parámetros
solo se abre y se cierra el parentesis y si solo lleva un argumento no se pone entre parentesis. 
si la funcion solo lleva una operacion no es necesario poner la palabra return 

ejemplo funcion ES6 con dos argumentos 
*/
//  const arearect=(altura,largo) =>{  //lleva brackets despues de la flecha
//  	return altura*largo
//  }

//  console.log(arearect(3,5))

//  //ejemplo funcion sin argumento 

//  const saludo=()=>{
//  	console.log("hola,como estas")
//  }

// saludo() //para invocarla lleva siempre parentesis

// // //funcion con una sola operacion 
// const multiplicacion=(a,b)=> a*b;


// const calificaciones=calificacion =>{
// if(calificacion>=9 && calificacion<=10){
// 	console.log("excelente")
// }else if(calificacion>=8 && calificacion<=8.9){
// console.log("buena")
// }else if(calificacion>=7 &&calificacion<=7.9){
// 	console.log("regular")
// }else if(calificacion>=6 &&calificacion<=6.9){
// 	console.log("mal")
// }else if(calificacion>=0 && calificacion<=5.9 ){
// 	console.log("reprobado")
// }else{
// 	console.log("introduzca calificacion entre 0 y 10")
// }
// }

// calificaciones(10)

// //uno de los beneficios de ES6 es que puedes proteger una variable (parameter default)
// //en caso de que no se haya definido, le puedes poner lo que sea 

// const saludar=(nombre="desconocido")=>{ //se define la variable en caso de que el 
// 	//parametro no tenga un dato
// 	console.log(`hola ${nombre}, como estas?`)
// }

// saludar() //imprime "hola desconocido, como estas?"
// saludar("amigo") //imprime "Hola amigo, como estas?"


// //se pueden combinar dos funciones haciendo que una dependa de la otra, 
// //incluso se puede cambiar el nombre de los parametros entre una funcion y otra 


// //por medio de ES6 (=>)

// let computadoras=(linea,columna)=>{ //se define una funcion con unos parametros
// 	return(linea*columna)
// }

// const costocomp=(emp1,emp2)=>{     
// 	return computadoras(emp1,emp2)*100   //se utiliza la funcion anterior con otros parámetros
// }
// console.log(costocomp(4,5))

// //modo tradicional (function)

// function totalcomp(linea,columna){
// 	return linea*columna;
// }


// function costo(linea1,linea2){
// 	return totalcomp(linea1,linea2)*100
// }

// console.log(costo(4,5))


//metodo ES6 con operador condicional terciario
// const regar=dia=>dia==="martes"? true: false


// console.log(regar("miercoles"))
 
let  getComputerChoice=(1+Math.floor((Math.random())*3))

console.log(getComputerChoice)











