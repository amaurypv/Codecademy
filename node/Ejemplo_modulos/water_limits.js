// const celsiusAFahrenheit = (celsius) => {
//     return celsius * 9 / 5 + 32;
// }

// const puntoFusion=0
// const puntoEbullicion=100

// const puntofusionF=celsiusAFahrenheit(puntoFusion)    
// const puntoEbullicionF=celsiusAFahrenheit(puntoEbullicion)

// console.log(`la temperatura de ebullicion del agua en farenheit es ${puntoEbullicionF}`)
// console.log(`la temperatura de fusion del agua en farenheit es ${puntofusionF}`)

// /* otra forma de ejecutar este codigo es por medio de una terminal en la que 
// podriamos poder la temperatura en celsius que queremos convertir(desde la terminal)*/
// const gradosCelsius=process.argv[2]
// /*se pone 2 porque al momento de querer ejecutarlo en la terminal se pondria la siguiente linea
// node water_limits.js 100 es como ponerlo de la siguiente manera [node, water_limits.js, 100]*/
// const celsAFaren=celsiusAFahrenheit(gradosCelsius) 

// console.log(`${gradosCelsius} grados celsius es igual a ${celsAFaren} grados farenheit`)

//se va a importar funciones que se tienen en otro archivo que se encuentra en la misma carpeta. 
const formulas=require('./modulo_temp') //siempre entre comillas ''

let faren=75
let cels=32

const farenAcels=Math.round(formulas.fAc(faren),2)  //se llamada la funcion 
const celAFar=Math.round(formulas.cAF(cels),2)

console.log(`${faren} farenheit es igual a ${farenAcels} grados centigrados`)
console.log(`${cels} grados centigrados es igual a ${celAFar} grados farenheit`)

//a veces solo se necesita importar una funcion, en ese caso se importa de la siguiente manera.

const {kelvin} =require('./modulo_temp')

celsAKel=kelvin(cels)
console.log(`${cels} grados centigrados es igual a ${celsAKel} kelvin`)
