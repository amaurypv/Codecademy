// const imprimir= 'hola mundo'
// console.log(imprimir)

// //para saber los modulos con los que cuenta node.js tiene que poner en termial lo siguiente.
// //node
// //require('module').builtinModules
// //nos muestra una lista de todos los modulos que tiene node

// //el modulo console nos permite imprimir en la consola ademas de hacer diferentes tipos de 
// //de impresiones como tablas:

// //hacer un array del nombre de 5 animales 
// const animales = ['perro', 'gato', 'pajaro', 'pato', 'mono']
// //imprimir el array como una tabla
// console.table(animales)

// //console.assert() sirve para que imprima un mensaje en la consola si la condicion es falsa
// //ejemplo 
// console.assert(1==2, '1 no es igual a 2')

// //otro modulo de node.js es process, que nos permite acceder a las variables de entorno
// //por ejemplo process.env nos sirve para acceder a las variables de entorno
// //por ejemplo process.env.PORT nos muestra el puerto que se esta ejecutando
// //otro ejemplo es 
// console.log(process.memoryUsage())// nos muestra el uso de memoria ( heapUsed)
// //otro ejemplo es process.uptime() nos muestra el tiempo que esta ejecutando el proceso
// //otro ejemplo es 
// console.log(process.cwd())// nos muestra el directorio actual
// //otro ejemplo es process.exit() nos permite cerrar el proceso
// //otro ejemplo es process.chdir() nos permite cambiar de directorio
// //otro ejemplo es process.env.PORT nos muestra el puerto que se esta ejecutando
// //otro ejemplo es process.env.NODE_ENV nos muestra el entorno que se esta ejecutando
// //otro ejemplo es process.env.NODE_ENV nos muestra el entorno que se esta ejecutando
// //otro ejemplo es process.env.NODE_ENV nos muestra el entorno que se esta ejecutando
// //otro ejemplo es 
// console.log(process.env.NODE_ENV) // nos muestra el entorno que se esta ejecutandossage

//definir el modulo os en una variable llamada sistema
const sistema = require('os')//para llamar el modulo, el nombre del modulo debe de ir entre comillas
//ya que tenemos guardado el modulo podemos conocer los diferentes metodos
//para conocer el tipo de sistema operativo de la computadora
const server={type:sistema.type(),architecture:sistema.arch(),uptime:sistema.uptime()}
console.log(server)

//para conocer la cantidad de memoria en la computadora 
const memoria={total:sistema.totalmem(),free:sistema.freemem()}
console.log(memoria)

//para conocer la cantidad de cpu en la computadora