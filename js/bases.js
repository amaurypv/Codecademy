// //esta linea es una constante
// let kelvin=300
// let kelacel=kelvin-273
// celsius=32
// farenheit=celsius*(9/5)+32
// console.log(`${celsius} grados celsius es igual a ${farenheit} grados farenheit`)

//para poner el if statement se pone if(){} si la condicionante es verdadera toma lo que hay dentro de los brackets
//ejemplo 

// let nume1=6
// let nume2=5
// if(nume1<nume2){ //dentro de los brackets se pone lo que se quiera ejecutar si la sentencia es verdadera
//     console.log(`${nume1} es menor que ${nume2}`)
// }else{
//     console.log(`${nume2} es menor que ${nume1}`)
// }
//--------------------------------------------------------------------------------------------------------------
//para comparar dos sentencias se usa || cuando es o y tambien se usa && cuando es 
//ejemplo 
// if(5<8 && 6>4){ // en este caso las dos sentencias tiene que ser True para que se ejecute
//     console.log('5 es menor que 8 y 6 es mayor que 4')
// }
//---------------------------------------------------------------------------------------------------
//ejemplo de || solo basta para que alguna de las comparaciones sea True
// if (6<9 || 7<6){
//     console.log('alguna de las dos sentencia es True')
// }

//-----------------------------------------------------
//el factor negativo ! se usa para indicar lo contrario 
//ejemplo
//  if (5!=6){ //se indica que 5 no es igual a 6, lo que es true por lo que va a imprimir la orden
//     console.log('5 no es igual a 6 ')
//  }

//-----------------------------------------------------------------------------------------------
// //variables falsas, hay variables que se consideran falsas por si solºo, serian las siguientes: 
// //null, 0, NaN, '', ""
// //este tipo de variables se pueden usar para hacer shorthands que son atajos
// //ejemplo si se tiene generar un nombre de usuario y no contiene nada, se puede poner lo siguiente. 
// let usuario=''
// if(usuario){
//     console.log(`bienvenido ${usuario}`)
// }else{  //si esta vacio imprime lo siguiente
//     console.log('escribe un nombre de usuario')
// }
// //tambien se puede usar para hacer un default
// let usuario1='' || 'usuario13455'
// console.log(usuario1) //imprime usuario13455 ya que la primera opcion la toma como falsa y toma la segunda opcion 
//--------------------------------------------------------------------------------------------------

// //operador ternario se usa en lugar del if y esta vidido de la siguiente manera:
// //variable ? resultado si es true : resultado si es falsol 
// //ejemplo 
// let numero1=4
// let numero2=4
// numero1<numero2? console.log(`${numero1} es menor que ${numero2}`):console.log(`${numero1} es mayor que ${numero2}`) //imprime 4 es menor que 5
// numero1<numero2? console.log(`numero1 es menor que numero2`):console.log(`numero1 es mayor que numero2`) // imprime numero1 es menor que numero2
// //tambien se puede utilizar para generar if y else de la siguiente forma. poniendo las condiciones  y : 
// let ex=4;
// let ye=4;
// ex>ye? console.log('ex es mayor que ye'):ex<ye? console.log('ye es mayor que ex'): console.log('ex y ye son iguales');

//---------------------------------------------------------------------------------------------------------------------------------
// //elif
// //se usa cuando se tiene una tercera opcion antes de else y despues de if.
// let luz='amarilla'
// if (luz==='verde'){
//     console.log('puedes avanzar')
// }else if(luz==='amarilla'){
//     console.log('avanza con cuidado')
// }else if(luz==='roja'){
//     console.log('tienes que hacer alto total')
// } else{
//     console.log('tienes que escger entre verde, amarillo o rojo')
// }

//---------------------------------------------------------------------------------------------------
// //switch
// //existe otra forma de trabajar en lugar del if y else if y es switch, la sintaxis es la siguiente: 
// let fruta='pera'
// switch(fruta){
//     case('uva'):
//     console.log(`la ${fruta} esta en 2.00 el kg`);
//     break;
//     case('platano'):
//     console.log(`la ${fruta} esta en 3.00 el kg`);
//     break;
//     case('manzana'):
//     console.log(`la ${fruta} esta en 4.00 el kg`);
//     break;
//     default:
//         console.log('escoge entre uva, platano, manzana')

// }   
//---------------------------------------------------------------------------------------------------------
//funciones. 
//para crear una funcion se define igual que las variables pero con la palabra function seguido por el nombre de la 
//la funcion y entre parentesis los valores que se tomaran dentro de la funcion y entre parentesis el cuerpo de la funcion 
// //ejemplo 
// function saludo(){
//     console.log('hola como estas ')
// }
// saludo()
//---------------------------------------------------------------------------------------------------------

// //se pueden agregar datos poniendolos dentro del parentesis 
// function saludo1(name){
//     console.log(`hola, mi nombre es ${name}`)
// }
// saludo1('amaury')

// //ejemplo hacer una funcion que sume todos los elementos que contiene un array 
// const sumatoria=(arreglo)=>{
//   let sum=0
//   for(let x of arreglo){
//     sum+=x
//   }
//   return sum
// }

// const parasum=[13,526,38,848,95];
// console.log(sumatoria(parasum))
//---------------------------------------------------------------------------------------------------------
//se pueden usar valores predeterminados en caso de que no se cuente con el valor en primera instancia

// function nombre(name='incognito'){
//     console.log(`hola, ${name}`)
// }
// nombre('amaury') // imprime hola, amaury
// nombre() //imprime hola, incognito

//---------------------------------------------------------------------------------------------------------
//return
//la palabra return, se utiliza para guardar el valor de algo, por ejemplo dentro de una funcion, se puede guardar el resultado
// y al momento de invocar esa funcion se puede asignar a una variable
//ejemplo 
//crear una funcion que de el area de un rectangulo y apartir de esa funcion generar una variable que se llame rect5x3 que 
//que tenga como valor de la funcion 
// function arearect(largo,ancho){
//     return largo*ancho
// }
// let rect5x3=arearect(5,3)
// console.log(rect5x3)  //imprime 15 

//---------------------------------------------------------------------------------------------------------
//existen variables que pueden contener dentro funciones, se les llaman funciones anonimas
//ejemplo 
//crear una variable que dentro contenga una funcion que calcule cuantos grados farenheit equivalen a centigrados

// const f2c=function(faren){
//     let cent=(faren-32)*(5/9)
//     return (`${faren} grados farenheit es igual a ${cent} grados centigrados`)
// }  
// console.log(f2c(77))    //para llamar a esa variable se pone el nombre de la variable y entre parentesis los valores

//---------------------------------------------------------------------------------------------------------
//existe otra forma de crear funciones de acuerdo al modelo es6 es el metodo de flecha en el cual ya no se usa la palabra
//function se sustituye por las teclas => 
//ejemplo hacer el mismo ejemplo anterior solo con el metodo de la flecha pero ahora de centigrados a farenheit

// const c2f=(cent)=>{
//     let far=((cent*(9/5))+32)
//     return(`${cent} grados centigrados es igual a ${far} grados farenheit`)
// }
// console.log(c2f(25))

//---------------------------------------------------------------------------------------------------------
//cuando se quiera usar solo un parametro, no es necesario el parentesis y si se va a ejecutar en una solo linea no se necesitan 
// //las llaves ya que retorna en automatico lo que hay despues de las llaves. 
// const saludar=nombre=>`buenos dias ${nombre}`
// console.log(saludar('amaury')) //imprime  buenos dias amaury

// const sumar=(pri,seg)=>pri+seg
// console.log(sumar(3,5)) //imprime  8

//---------------------------------------------------------------------------------------------------------
//arrays o arreglos. 
//se usan cuando se quiere hacer una lista si escribre entre corchetes y se separan por comas se pueden usar numeros o cadenas
// const arreglo1=[1,2,3,4,6,6,7];
// const arreglo2=['saludos','como','estas'];

//para accesar a un dato dentro de un arreglo se cuenta a partir de la posicion 0 y se pone entre bracket la posicion 
//se puede asignar a otras variables
// const pregunta=arreglo2[1]
// console.log(pregunta) //imprime como

//  a veces se quiere accesar al ultimo elemento de una lista se utiliza array.at(-1)
//ejemplo accesar al ultimo elemento de la lista arreglo1. 
// let arreglo5=[4,5,7,8,9,0,3,1];
// let ultimo=arreglo5.at(-1)
// console.log(ultimo) //imprime 1
// //o si se quiere accesar al penultimo es .at(-2)
// let penultimo=arreglo5.at(-2)
// console.log(penultimo) //imprime 3

//se puede cambiar el contenido de un elemento que se encuentra dentro del arreglo. 

// arreglo2[2]='como te va'
// console.log(arreglo2) //ahora imprime [ 'saludos', 'como', 'como te va' ]

//para saber cuantos elementos contiene el arreglo se usa .length
// console.log(arreglo1.length) //imprime 7

//para añadir un elemento al ultimo lugar de la lista se usa .push()
// arreglo2.push('?')
// console.log(arreglo2) //imprime [ 'saludos', 'como', 'como te va', '?' ] ya se añadió '?' al final 

//para eliminar el ultimo elemento de una lista se usa .pop()
// arreglo1.pop()
// console.log(arreglo1) //imprime [ 1, 2, 3, 4, 6, 6 ] ya no aparece el 7 que era el ultimo lugar 

//shift
// elimina el primer elemento de una lista. 
// arreglo2.shift()
// console.log(arreglo2) //imprime [ 'como', 'como te va', '?' ] ya no aparece "saludos"

//unshift 
//se usa para añadir un elemento al primer lugar de la lista
// arreglo2.unshift('hola')
// console.log(arreglo2) //imprime [ 'hola', 'como', 'como te va', '?' ]

//slice()
//se usa para tomar una parte de la lista dentro del parentesis (index inicial,index despues del deseado)
// console.log(arreglo1.slice(1,4))

//array.indexOf(elemento)
//indica en que posicion del arreglo se encuentra el elemento que deseamos buscar
// console.log(arreglo2.indexOf('?')) //imprime 3 porque [ 'hola', 'como', 'como te va', '?' ]

//para seleccionar un elemento de un array dentro de otro array se pone primero el index del primer array luego la posicion 
//del elemento dentro de ese array
// const anidado=[1,2,4,[7,6,8,9]];
// console.log(anidado[3][1]) //imprime 6 

//splice
//se usa para sustituir elementos de un arreglo por otro. 
//arreglo.splice(index donde empieza,cuantos elementos se van a eliminar,elemento que se va a poner)

//ejemplo en arreglo1 se cuentra asi [ 1, 2, 3, 4, 6, 6 ] se quiere sustituir el primer 6 por un 5 para que quede bien la numeracion
// arreglo1.splice(4,1,5)
// console.log(arreglo1)

// //sort 
// //sirve para arreglar un array es decir ordenarlo. 
// let desordenada=[5,3,6,8,2,3,6,8,2,1];
// // let ordenada=desordenada.sort();
// // console.log(ordenada) //imprime [1, 2, 2, 3, 3, 5, 6, 6, 8, 8]

// //para ordenar de forma descendente se tiene que definir una funcion dentro del arreglo sort, donde se indique que hay dos parametros
// //a,b y se debe de ordenar del alto al bajo de la siguiente manera b-a

// let descendente=desordenada.sort((a,b)=>b-a) 
// console.log(descendente) //imprime [8, 8, 6, 6, 5,3, 3, 2, 2, 1]

//para ordenar objetos por sus valores dentro de las llaves se usa de la siguiente forma 
//se tiene que poner arreglo.sort((a,b)=>a.key-b.key) donde key es el valor de la llave por la que queremos organizar. 

// carros=(marca,modelo,año)=>{
//     return{
//         marca,
//         modelo,
//         año
//     }
// }

// let vocho=carros('volkswagen','vocho',1988)
// let tsuru=carros('nissa','tsuru',1990)
// let chevy=carros('chevrolet','chevy',1994)
// let clasicos=[vocho,chevy,tsuru]
// //ordenar los autor por año 
// console.log(clasicos.sort((a,b)=>a.año-b.año)) 


// //filter 
// //se usa para filtrar un arreglo con las caracteristicas que necesitamos. 
// //ejemplo hacer un nuevo array con palabras que tengan mas de 6 letras
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const mayora6=words.filter(mayor=>mayor.length>6)
// console.log(mayora6)
// //crear un array con numeros solo mayores a 5 
// const numeros=[4,6,7,8,3,3,7,9,9,3];
// const mayora5=numeros.filter(may=>may>5); ///dentro del parentesis de define una variable que es la que se va comparar
// console.log(mayora5)

// //join
// //para convertir un arreglo a una cadena se usa  de la siguiente manera array.join(' ') entre parentesis va el elemento 
// //que se quiere poner para separar elementos del array. 
// //ejemplo convertir el suguiente array a cadena sin comas. 
// let arreglo4=['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; 
// let sincoma=arreglo4.join(' ') 
// console.log(sincoma)

// //para redondear a la cifra mas cercana se pueden usar Math.floor() o ~~
// let pi=~~3.14
// console.log(pi) //imprine 3
//---------------------------------------------------------------------------------------------------------
// loops o bucles
// para repetir una tarea de forma automatica se usan los bucles
//una forma de generar un bucle es por medio de for. la sintaxis de for es la siguiente

//for(let contador=0;contador <5;contador ++){
//    console.log(contador)
//}
//primero se define una variable en este caso es contador
//despues se va a dar la condicion, mientras esta sea falsa, el loop va a seguir ejecutandose
//despues contador ++ se usa para indicar cada cuando se va a incrementar el valor de la variable mientras no se cumpla la condicion
// abajo se indica que se quiere hacer mientras no se cumpla la condicion 

// for (let n=0;n<11;n++){
//     console.log(n)
// } 
// va a imprimir 0 1 2 3 4 5 6 7 8 9 10

//para que vaya mas a menos 
// for(let x=10;x>=0;x--){
//     console.log(x)
// }

//se puede iterar a traves de un array, poniendo la condicion for       (let i=0;i<array.length;i++)

// let paises=['mexico','canada','usa'];
// for(let i=0;i<paises.length;i++){
//     console.log(`${paises[i]} pertenece a norteamerica`)
// }

//loops anidados se trata de un loop dentro de otro loop primero se recorre el primer 
//elemento del primer loop y recorre todo el arreglo de la segunda
//ejemplo
//comparar cada uno de los elementos entre los dos arreglos si hay alguno que se repite en ambos arreglos indicarlo.  
// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i=0;i<myArray.length;i++){
//     for (let j=0;j<yourArray.length;j++){
//         if(myArray[i]==yourArray[j]){
//             console.log(`${myArray[i]} se encuentra en ambos arreglos`)
//         }
//     }
// }

//crear un loop de dos arreglos con una lista de 3 nombres cada uno, que tengan 2 en comun y agregarlos a un arreglo que se llame 
//mutual friends
// let bobsFollowers=['juan','pedro','paco','luis'];
// let tinasFollowers=['pedro','ana','luis'];
// let mutualFollowers=[];
// for (let i=0;i<bobsFollowers.length;i++){
//     for (let j=0;j<tinasFollowers.length;j++){
//         if(bobsFollowers[i]==tinasFollowers[j]){
//             mutualFollowers.push(bobsFollowers[i])
//         }
//     }
// }
// console.log(mutualFollowers)

//para crear un loop con while, es muy parecido el esquema a for, solo que primero se declara la variable fuera del loop.
//despues se genera el loop con la palabra while(){} y dentro se pone la condicion que en caso de que sea verdadera, se rompa el loop

//ejemplo hacer un loop usando while  en donde la variable wh aumente de 1 en 1 hasta llegar a 10 e imprimir cada valor en cada iteracion  
// let wh=0
// while (wh<=10) {
//     console.log(wh);
//     wh++
// }   

//break
//se utiliza para que al momento de obtener cierta condicion romper el loop sin que este haya llegado a ser cierto en su condicon 
//ejemplo hacer un loop que la variable vaya de 0 a 100 de 1 en 1, pero que al llegar a 50 se rompra el loop usando break 

// for(let i=0;i<=100;i++){
//     console.log(i)
//     if(i==50){
//         break;
//     }
// }

//the for ... of lopp

//se utiliza en loops a diferencia de los loops no lleva let i=0;condicion,incremento
//ejemplo 

// var nombre='amaury';
// for(let letras of nombre){
//     console.log(letras)
// }
//continue 
//se utiliza para saltar el resultado de esa iteracion 

//ejemplo
// let arr=[] 
// let numeracion=[1,2,3,4,5,6];
// for(num of numeracion){
//     if(num==4){
//         continue
//     }
//     arr.push(num);
// }
// console.log(arr)  //imprime [ 1, 2, 3, 5, 6 ]  se salta el 4

// console.log(Math.max(...numeracion))

//---------------------------------------------------------------------------------------------------------
//objetos
/* se usan para guardar variables mas detalladas que un arreglo ya que contienen una llave y un valor.
se usan como una variable pero lleva llaves y los valors se separan por una coma 
si la llave solo lleva una sola palabra no se se necesitan poner comillas, si lleva un espacio entre palabras
se tiene que poner comillas*/

// let objeto1={
//     nombre:'amaury',
//     apellido:'perez',
//     'edad o años':38
// }
//para accessar al valor de un objeto se tiene que poner el nombre del objeto.llave esto solo aplica cuando la llave es de una sola palabra

// console.log(objeto1.nombre) //imprime 'amaury

//cuando se tienen dos palabras en la llave se usa ['palabra compuesta']
// console.log(objeto1['edad o años'])

//para añadir nuevos valores a un objeto se puede hacer por medio del punto o de los corchetes.
// objeto1['estado civil']='casado'
// objeto1.hijos=2
// objeto1['hobie']='xbox'
// console.log(objeto1) //imprime 
//                             // {
//                             //     nombre: 'amaury',
//                             //     apellido: 'perez',
//                             //     'edad o años': 38,
//                             //     'estado civil': 'casado',
//                             //     hijos: 2,
//                             //     hobie: 'xbox'
//                             //   }
// //se pueden borrar datos de un objeto con la palabra delete
// delete objeto1.hobie
// console.log(objeto1) //imprime {
//                         //  nombre: 'amaury',
//                         //  apellido: 'perez',
//                         //  'edad o años': 38,
//                         //  'estado civil': 'casado',
//                         //  hijos: 2
//                         // }                     

// // metodos 
// //son cuando se ponen funciones dentro del metodo no es necesario poner un valor, solo con el nombre de la llave
// let metodo={
//     saludo(){  //oara poner un metodo dentro de un objeto
//         console.log('para llamar un metodo se pone objeto.funcio()')
//     }
// }
//para lamarlo se usa la siguiente forma 
// metodo.saludo()

//tambien pueden haber objetos dentro de los objetos y estos se pueden llamar de la siguiente manera:
//del siguiente objeto definir una variable que se llame capFave que contenga la comida favorita del capitan 
// let spaceship = {
//     passengers: null,
//     telescope: {
//       yearBuilt: 2018,
//       model: "91031-XLT",
//       focalLength: 2032 
//     },
//     crew: {
//       captain: { 
//         name: 'Sandra', 
//         degree: 'Computer Engineering', 
//         encourageTeam() { console.log('We got this!') },
//        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//     },
//     engine: {
//       model: "Nimbus2000"
//     },
//     nanoelectronics: {
//       computer: {
//         terabytes: 100,
//         monitors: "HD"
//       },
//       'back-up': {
//         battery: "Lithium",
//         terabytes: 50
//       }
//     }
//   }; 
  
// let capFave=spaceship['crew']['captain']['favorite foods'][0]
// console.log(capFave)

// Right now the passengers property has a value of null. 
// Instead, assign as its value an array of objects. 
// These objects should represent the spaceship‘s passengers as individual objects. 
// Make at least one passenger object in the array that has at least one key-value pair on it.
// spaceship['passengers']=[{cap:'sandra'}]

// const greenEnergy=(obj)=>
// obj['Fuel Type']='avocado oil'

// const remotelyDisable=(obj)=>
//   obj={
//     disabled:true
//   }


//para iterar a traves de un objeto se puede usar for in. 
//ejemplo crear una lista con el puesto de cada miembro de la nave y su nombre
// let spaceship2 = {
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
// console.log(spaceship2['crew']['captain']['name'])
// for (let puesto in spaceship2.crew){     //se usa dependiendo del nivel al que se quiera llegar en el objeto
//     console.log(`${puesto}:${spaceship2.crew[puesto]['name']}`) //entre corchetes la variable no va entre comillas
// } 
//imprime Lily
// captain:Lily
// chief officer:Dan
// medic:Clementine
// translator:Shauna


// for (let nombre in spaceship2.crew){
//     console.log(`${spaceship2.crew[nombre].name}: ${spaceship2.crew[nombre].degree}`)
// }

//this
//this se utiliza para acceder a valores dentro del mismo objeto ya que sin el this no se puede acceder
//ejemplo 
// const objeto2={
//     nombre:'amaury',
//     apellido:'perez',
//     edad:35,
//     presentacion(){
//         console.log(`mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
//     }
// }
// objeto2.presentacion()

// //getter 
// //se usa en los objetos para definir una funcion con valores a los que nos se pueden cambiar _key y para invocarlos
// //aunque se trata de una funcion no se necesita poner los parentesis.
// //ejemplo poner un getter en un objeto llamado objeto3
// let objeto4={
//     _nombre:'amaury',
//     _apellido:'perez',
//     get nomcompleto(){
//         if(this._nombre && this._nombre){
//             console.log(`${this._nombre} ${this._apellido}`)
//         }else{
//             console.log('escriba nombre o apellido')
//         }
//     }
// }
// objeto4.nomcompleto

// //setter 
// //Se usa para asignar valores a llaves dentro de un objeto que ya se encuentra definido. 
// const person = {
//   _age: 37,
//   set age(newAge){
//     if (typeof newAge === 'number'){
//       this._age = newAge;
//     } else {
//       console.log('You must assign a number to age');
//     }
//   }
// };

// //para usar el set se llama como si fuera una llave del objeto pero se define el valor 
// person.age=40
// console.log(person._age)

// const robot = {
//   _model: '1E78V2',
//   _energyLevel: 100,
//   _numOfSensors: 15,
//   get numOfSensors(){
//     if(typeof this._numOfSensors === 'number'){
//       return this._numOfSensors;
//     } else {
//       return 'Sensors are currently down.'
//     }
//   },
//   set numOfSensors(num){
//     if(typeof(num)=='number'&& num>=0){
//       this._numOfSensors=num
//     }else{
//     }
//   }
// };
// robot.numOfSensors=44
// console.log(robot._numOfSensors) //imprimre 44 


// //factory objects
// // es practicamete una funcion y se utilizan para generar objetos a partir de una estructura que se define de la siguiente manera:
// //es importante manejar el return antes del objeto 
// const robotFactory=(model,mobile)=>{
//   return{
//     model:model,
//     mobile:mobile,
//     beep(){
//       console.log('Beep Boop')
//     }
//   }
// }
// //para definir un objeto a partir de un factory se define de la siguiente forma
// const tinCan=robotFactory('P-500',true)  //se usa como si fuera una funcion

//se puede definir una llave y su valor en una factory poniendo el mismo argumento como llave.
//ejemplo 
// const carros=(marca,año)=>{
//   return{
//     marca,
//     año
//   }
// }
// let jetta=carros('volkswagen',2015)
// console.log(jetta)

// //se pueden definir los valores de una llave de una forma mas facil con corcehtes {}  const={nombre llave}=nombre de objet
// //ejemplo 
// let {marca}=jetta  //se pone entre corchete el nombre de la llave y se da igual al nombre del objeto
// console.log(marca)

// //static methods son funciones que ya estan definidas y nos ayudan en diferentes cosas algunos ejemplos son los siguientes:

// // este es un ejemplo de object factory
// const crear=(nombre,apellido)=>{
//   return{
//     nombre,
//     apellido
//   }
// }

// const usuario=crear('amaury','perez')
// console.log(usuario)
// //un static method es assign, nos sirve para generar un objeto nuevo a partir de otro.
// //se usa de la siguiente manera:  const objetonuevo=Object.assign(objetooriginal,{llave:valor})
// // incluso se pueden agregar mas datos desde la definicion del objeto nuevo

// const amaury=Object.assign(usuario,{edad:38})  //usario contiene { nombre: 'amaury', apellido: 'perez' }
// console.log(amaury) //imprime { nombre: 'amaury', apellido: 'perez' }

// //objet.entries. devuelve un arreglo con los valores y llave decada entrada en el objeto. 
// //se usa poniendo Object.entries(objeto)
// const entrada={
//   a:1,
//   b:2,
//   c:3,
//   d:4
// }
// let entries=Object.entries(entrada)
// console.log(entries) //imprime [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

// //object keys
// //devuelve un arreglo con las llaves del objeto. 

// let llaves=Object.keys(entrada2)
// console.log(llaves) //imprime [ 'a', 'b', 'c', 'd' ]
// const leccion={
//   valor1:1,
//   valor2:2,
//   _valor3:3,
//   get valor4(){
//     if(this.valor1>this.valor2){
//       console.log(`${this.valor1} es mayor que ${this.valor2}`)
//     }else{
//       console.log(`${this.valor2} es mayor que ${this.valor1}`)
//     }
//   },
//   valor(){
//     console.log(`imprime el valor1 ${this.valor1}`)
//   }
// }

// //encontrar el valor maximo de un array. se usa Math.max(array)
// const arreglo3=[5,5,3,5,7,88,4,3];
// let maximo=Math.max(...arreglo3)
// console.log(`el valor maximo del arreglo es ${maximo}`)

//--------------------------------------------------------------------------------------------------------------------

// /*high order functions, las funciones de alto orden son funciones que aceptan funciones como argumentos, mientras que las funciones
// de primer nivel solo aceptan, numeros, cadenas objetos y arrays. */
// //ejemplo 
// //primero definimos una funcion de primer orden. 
// const resultado=(x)=>{
//   console.log(`el resultado es ${x}`)
// }

// //despues se define una funcion de alto orden, en uno de los argumentos va aceptar la funcion que hemos definido anteriormente
// const multiplicar=(funres,a,b)=>{
//   let multi=a*b;
//   funres(multi) // se indica que la funcion va a tomar como argumento la variable multi
// }
// multiplicar(resultado,3,4) //para llamarla se indica solo el nombre de la funcion(resultado) sin argumentos. 

// //ejemplo crear una orden de alto orden que contenga como argumento una funcion que sume 2 a un numero y que lo compare
// //con otro argumento que dentro de la funcion sume dos. si la comparacion es correcta retornar el valor de la comparacion 
// // si no retornar una cadena que diga que las comparaciones no coinciden. 
// const suma2=(x)=>x+2;
// const compara=(func,y)=>{
//   let a=suma2(y);
//   let b=y+2;
//   if(a===b){
//     return b
//   }else{
//     return `no coincicen`
//   }
// }

// console.log(compara(suma2,4))

//-------------------------------------------------------------------------------------------------------------------
// // //metodos de iteracion
// // //forEach
// // //se usa para ejecutar el mismo codigo en cada elemento de un array, pero no cambia el arreglo.

// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// const fruta=fruits.forEach(fr=>console.log(`I want to eat a ${fr}`)) //primero se define lo que se va hacer arreglo.forEach()
//                                                                       // dentro del parentesis se pone la funcion de lo que se va 
//                                                                       // a hacer con le metodo forEach. se define una variable y
//                                                                       // se vuelve una funcion x=>{console.log(x)}
// console.log(fruta)

// //map 
// //hace practicamente lo mismo que el forEach,solo que como resultado genera un array
// //ejemplo crear un array que contenga el doble de cada elemento del array pequeño 
// const pequeño=[1,2,3,4,5];
// const doble=pequeño.map(x=>{return(x*2)})
// console.log(doble) //imprime [ 2, 4, 6, 8, 10 ]

// //ejemplo 
// //apartir del array animales seleccionar la primera letra de cada elemento y guardarlo en un array nuevo llamado secret.
// //convertir el array secret en una cadena para ver el mensaje secreto.
// const animales = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// const secret=animales.map(x=>{return x[0]})
// console.log(secret) //imprime ['H', 'e', 'l', 'l','o', 'W', 'o', 'r','l', 'd']
// console.log(secret.join('')) //imprime HelloWorld

//filter 
// //hace un recorrido por cada elemento del array si cumple con la condicion que se impone se agrega a otro arreglo. 
// //ejemplo crear una variable que sea igual a un arreglo que solo contenga los numeros impares
// const numeros=[4,5,6,7,8,8,9,2,3,4];
// const impares=numeros.filter(x=>(x%2)!=0)
// console.log(impares) //imprime [ 5, 7, 9, 3 ]

// //primero se define una funcion de primer orden que tenga como argumento un array y que solo devuelva los numeros pares
// const soloimpares=(arr)=>{
//   return arr.filter(x=>(x%2)==0)
// }

// //despues de define una funcion de alto orden que acepte como argumento la funcion de los numeros pares y un arreglo
// const highorderimpartes=(fun,arr)=>{
//   return fun(arr)  //en el cuerpo se pone la funcion con su argumento
// }
// console.log(highorderimpartes(soloimpares,numeros))

// //findIndex()
// //nos devuelve la posición en el arreglo de la condicion que le pongamos, solo devolverá la posición del primero que cumpla con 
// //esa condicion. en caso de que ninguno cumpla retornará -1
// //ejemplo encontrar el indice del numero que sea menor a 100 en el arreglo 
// const numerosram=[23,66,46,7,354,67,8];
// const mayora100=numerosram.findIndex(x=>x>100)
// console.log(mayora100) //imprime 4 porque en la posición 4 del arreglo numeros ram se encuentra 354

// //reduce()
// //este metodo como su nombre lo dice, reduce los valores que hay en un array a un solo dato, por lo general se usa
// //dos parametros, acumulado y valoractual. 
// //ejemplo 
// //sumar todos los elementos del arreglo. 
// const parasum=[1,2,3,4];
// const suma=parasum.reduce((acu,act)=>{ //son dos argumentos, por lo que tienen que ir entre parentesis 
//     return acu+act
// })
// console.log(suma) //imprime 10

// //si se quiere añadir otro dato al reducido, se tiene que poner despues de la primera definicion con una coma 
// //ejemplo 
// //a la suma del array sumarle 100 
// let sumar=[1,2,3,4,5];
// const suma100=sumar.reduce((acu,act)=>{return acu+act},100)
// console.log(suma100) //imprime 115

// //every 
// //devuelve false o true si todos los elementos del arreglo cumplen con la condicion que se pone. 

// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// const interestingWords=words.filter(x=>x.length>5)
// console.log(interestingWords)
// console.log(interestingWords.every(x=>x.length>5))

//-------------------------------------------------------------------------------------------------------------------
//class 
//class es una plantilla para crear objetos y puede generar mediante la siguiente sintaxis.

// class Persona{
//     constructor(nombre,edad){ //siempre debe de llevar la palabra constructor y dentro  los datos que va a llevar
//         this.nombre=nombre; //se debe de poner siempre this. para hacer referencia al nombre que se vaya a tomar
//         this.edad=edad;
//     }
//     saludo(){
//         console.log(`hola mi nombre es ${this.nombre}`)
//     }
// }
// // lo anterior es un constructor y se usa para generar objetos de una forma más rápida. 
// //para nombrar un nuevo objeto a partir de una clase se hace de la siguiente manera: 
// const persona1=new Persona('amaury',38)
// persona1.saludo() // imprime hola mi nombre es amaury
// console.log(persona1.edad) //imprime 38

// //ejemplo para crear una clase. 
// //se pueden poner getter y funciones 
// //para poner una clase que contenga getter y funciones se define de la siguiente manera. 
// //instancia es cuando se define un nuevo objeto a partir de una clase y se llama un valor de una llave
// //ejemplo 
// class Surgeon{
//     constructor (name,department){
//         this._name=name;             //cuado se pone (_) quiere decir que no se puede llamar directamente la llave se tiene que hacer mediante un getter  
//         this._department=department

//     }
// }
// const cirujano=new Surgeon('Daniel','pediatra')
// console.log(cirujano.name) //imprime daniel

// // crear una clase nueva en donde se utilize un get y una funcion
//  class trabajador{
//     constructor (nombre,edad){
//         this._nombre=nombre
//         this._edad=edad
//         this._vacaciones=24
//     }  //los getter se ponen siempre fuera del constructor
//     get nombre(){
//         return this._nombre  //para los getter se pone como una funcion y se retorna el valor 
//     }
//     get vacaciones(){  //los getter solo se usan cuando no se puede modificar el valor directamente
//         return this._vacaciones

//     }
//     diasrestantes(dias){  //para cambiar el valor de vacaciones se puede hacer una funcion 
//         this._vacaciones=this._vacaciones-dias
//     }

// }
 
// const paco=new trabajador('paco', 30)

// paco.diasrestantes(10)
// console.log(paco.vacaciones)

//-------------------------------------------------------------------------------
//superclass
/* se usa una super class para crear una clase de la cual se puede derivar clases 
que contengan algunos parámetros en comun*/
//ejemplo crear una superclass de animales 
//una de las ventajas de usar una super clase es que si modificas algo aun despues de que definiste las clases
//se modifica en todos sus hijos y clases
// class Animal{
//     constructor(nombre,edad){
//         this._nombre=nombre;
//         this._edad=edad
//     }
//     get nombre(){
//         return this._nombre
//     }
//     get edad(){
//         return this._edad
//     }
// }
// //ahora que ya se tiene una superclass se puede hacer una class para perros y otra para gatos 
// // a partir de la superclass animal usando class nombre-de-la-clase extend superclase

// class Perro extends Animal{ //se tiene que poner clase y extend
//     constructor(nombre,edad,comida){  //en el constructor, los parametros que se quieren poner
//         super(nombre,edad) //se pone super y los parametros que tiene la superclass
//         this._comida=comida //el parametro que no incluye la superclass
//     }
//     get comida(){
//         return this._comida
//     }
//     comer(veces){
//         console.log(`el perro debe de comer ${veces} al dia (come ${this.comida})}`)
//     }
// } 

// //ahora que ya tenemos la clase perro que se heredó de la superclase animal podemos crear una instancia 

// const kalizi=new Perro('kalizi',4,'croquetas')

// console.log(kalizi.edad)
// kalizi.comer(2)

/*ejemplo 
In the next few exercises, you will create two subclasses (Doctor and Nurse) 
from a parent class named HospitalEmployee. Below, we have listed the properties and methods
you will find in the Doctor and Nurse classes.

Doctor
Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _insurance
Methods: .takeVacationDays()
Nurse
Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
Methods: .takeVacationDays(), .addCertification()
In main.js, create a parent class named HospitalEmployee. Add a constructor with name as an argument.*/

// class HospitalEmployee{
//     constructor(name){
//       this._name=name
//       this._remainingVacationDays=10
//     }
//     get name(){
//         return this._name
//     }
//     get remainingVacationDays(){
//         return this._remainingVacationDays
//     }
//     takeVacationDays(daysOff){
//         this._remainingVacationDays=this._remainingVacationDays-daysOff
//     }
//     static generatePassword(){
//         return Math.floor(Math.random()*10000)
//     }
// }

// class Nurse extends HospitalEmployee{
//     constructor(name, certifications){
//         super(name)
//         this._certifications=certifications

//     }
// }
// //crear una clase a partir de la superclass HospitalEmployee que contenga los siguientes datos.
// //nombre, insurance y el metodo takeVacationDays()
// class Doctor extends HospitalEmployee{
//     constructor(name, insurance){
//         super(name)
//         this._insurance=insurance
//     }
// }
// const doctorLuis=new Doctor('luis',true)



// const nurseOlynyk=new Nurse('Olynyk',['Trauma', 'Pediatrics'])

// console.log(nurseOlynyk.remainingVacationDays) //aunque no se hayan puesto en el super, se agregan a la instancia 

// nurseOlynyk.takeVacationDays(4)
// console.log(nurseOlynyk.remainingVacationDays)

// //metodos estaticos, se usan solo para las clases y no se puede usar en instancias. 
// //ejemplo
// class perros{
//     constructor(raza){
//         this._raza=raza
//     }
//     static nombres(){   //para generar un metodo esatico se tiene que poner al principio la palabra static
//         let nombre=['lala','lila','lula'];
//         let ran=Math.floor(Math.random()*3)
//         return nombre[ran]
//     }
// }

// console.log(perros.nombres()) //imprime algun nombre d ela lista


//--------------------------------------------------------------------------------------------

// //errores 
// /*existen dos tipos de errores en js, los que nos arroja el sistema cuando cometemos alguno de los errores
// como una variable no definida entre otras y el error que nosotros queremos definir. 
// cuando definimos un error, de la forma normal (Error) no se detine la ejecucion del codigo
// ejemplo*/
// // crear un error y poner una linea donde se imprima otro dato. 
// console.log(Error('este es un error')) //manda un error pero imprime lo que ponemos entre parentesis
// console.log('si imprime esta parte') //si se imprime

// //cuando queremos que no se siga ejecutando el codigo tenemos que poner throw
// throw Error('este es un error 2') //marca el error en la consola. 
// console.log('Esto no se imprime') //ya no se imprime esta parte

//-----------------------------------------------------------------------------------
/* try y catch
se usa cuando queremos ejecutar una parte del código y si nos arroja un error que se ejecute la parte del catch
ejemplo.*/
try{
    return x+2  //marca error porque no esta definida 'x'
}catch(mensaje){
    console.log('hay un error atras') //se va a imprimir esta parte. 
}


