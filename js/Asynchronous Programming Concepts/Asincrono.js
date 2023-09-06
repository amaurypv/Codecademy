/*primero definimos que es un codigo sincronizado.
por ejemplo cuando hacemos una casa, primero empezamos con los cimientos, despues que se 
definieron los cimientos, se va poniendo ladrillo por ladrillo hasta formar las paredes.
No podemos brincarnos el especio de un ladrillo porque si no se caeria la pared, los mismo 
pasa con los codigos sincronizados, no se ejecuta la linea siguiente hasta que se ejecutaron todas 
las anteriores.
Con el codigo asincrono podemos hacer que una pagina web cargue solo necesario para poder ejecutar
y despues se ejectue lo demas para que la interaccion con el usuario sea mas rapida  


algnas funciones asincronas son: 
mouse.addEventListener(click,()=>{
    console.log('hasta hacer click')
})
en este tipo de funciones es asincrona, ya que solo se ejecutará hasta que se haga click en la imagen
otro tipo de funcion asincrona es 
*/
// setTimeout(()=>{
//     console.log('este mensaje se imprimira de forma asincrona')
// },2000)

const { rejects } = require("assert")
const { resolve } = require("path")

// //ejemplo setTimeout()
// //primero se define una funcion que diga cualquier cosa
// const usingSTO=()=>{
//     console.log('linea de usingSTO')
// }
// // despues se invoca el setTimeout() debe de tener dos parametros, una funcion y el tiempo en milisegundos (1 seg=1000)
// setTimeout(usingSTO,3000)

//event loop es cuando se pone un loop en el que no se imprima nada solo se lleve un tiempo
//ejecuartlo
// console.log("I'm learning about");
// for (let idx=0; idx <99999999; idx++) {}

// console.log("the Event Loop");
// console.log('primer parrafo')
// setTimeout(()=>{
//     console.log('segundo parrafo')
// },3000)
// console.log('tercer parrafo')

//---------------------------------------------------------
/*promesas
las promesas son funciones que nos permiten manejar la ejecucion de codigo asincrono
se dividen en 3 partes: pendiente, ejecutado y no ejecutado. 
cuando no se ha terminado de ejecutar la promesa se considera como pendiente,
cuando se ejecuta la promesa se considera como ejecutado y no ejecutado.
cuando se cumple con la condicion dentro de la promesa se considera como ejecutado 
cuando no se cumple con la condicion dentro de la promesa se considera como no ejecutado
la sintaxis de la promesa es:
primero se define una funcion (funcion ejecutor) que recibe dos parametros, resolve y reject:

const funcion1=(resolve,reject)=>{
    if(true){
        resolve('funcion1 se ejecuto correctamente')
    } else{
        reject('funcion1 no se ejecuto correctamente')
    }
}
despues se define la promesa:
const promesa1=()=>{
    new Promise(funcion1) //la promesa se dfine como una funcion pero con la palabra new promise y el nombre de la funcion 
}
*/

// //ejemplo de como usar una promesa
// const inventory = {
//   sunglasses:1888,
//   pants: 1088,
//   bags: 1344
// };

// const myExecutor=(resolve,reject)=>{
//     if(inventory.sunglasses>0){
//         resolve('Sunglasses order processed.')
//     }else{
//         reject('That item is sold out.')
//     }
// }
// const orderSunglasses=()=>{
//     return new Promise(myExecutor)
// }

// let pedido=orderSunglasses()
// console.log(pedido)

//--------------------------------------
/*uso de .then() y .hacth()
para utilizar el resultado de una promesa, usamos los metodos .then() y .hatch()
estos metodos se encadenan a la promesa y permiten especificar que hacer cuando la promesa se cumple o se rechaza.

Supongamos que tienes una función getUserData() que realiza una solicitud HTTP 
para obtener los datos de un usuario desde un servidor. Esta función devuelve una promesa que 
se resuelve con los datos del usuario si la solicitud es exitosa, o se rechaza con un error en caso contrario. 
Puedes encadenar .then() a esta promesa para manejar el resultado exitoso.
*/
//primero se define una funcion llamada getUserData que contiene una promesa. 
// const getUserData = () => {
//     return new Promise((resolve, reject) => { //como las promesas lleva dos opciones resolve,reject
//       setTimeout(() => { //se define un setTimeout con una constante simulando la constante userData de 2 segundos 
//         const userData = { name: "amaury", age: 38 };
//         resolve(userData); //se resuelve con la constante userData
//       }, 2000); //se deja dos segundos de timeOut
//     });
//   };
  
//   getUserData()
//     .then((userData) => { //se usa .then() como argumento se toma el resolve de la promesa
//       console.log("Datos del usuario:", userData); //si se cumple con la promesa se imprime los datos de usuario
//     }) 
//     .catch((error) => { //si no se cumple con la promesa se pone catch(error) y se envia un mensaje con el error
//       console.log("Ocurrió un error:", error);
//     });

/* hay tambien una forma de hacer que los then se encadenen y se ejecuten de manera secuencial.
*/

// const inventario=[['playeras',1],['pantalones',2],['gorras',1],['calcetines',1]]
// //se va generar una promesa que revise si tenemos inventario completo
// const checar_inventario=(arreglo)=>{ 
//   return new Promise((resolve,reject)=>{ //estructura de una promesa
//     bander=true //se genera una bandera para que cuando se haga el recorrido por el metodo forEach
//     inventario.forEach(item=>{ 
//       if(item[1]<=0){
//         bander=false //al hacer el recorrido por el arreglo si encuentra un produco en cero activa la bandera
//       }
//     })
//   if(bander){  //si la bandera no se activo la promesa se pone como ejecutada
//     resolve(arreglo)
//   }else{  //si la bandera no se activo entonces se tiene como no ejecutada la promesa
//     reject('no hay inventario')
//   }
//   }
//   )
// }
// // se va a usar un .then. primero se pone la promesa y luego el then. 
// //dentro de then se tiene como argumento el valor de resolve que nos dio en la promesa
// //despues se pone lo que se quiere hacer con ese valor en este caso se va solo a imprimir
// //el valor de resolve
// checar_inventario(inventario).then((si)=>{console.log(si)})  

//---------------------------------------------------------------------------------------

/*ejemplo de una promesa con .then() y .catch()
 se va a definir una funcion que retorne una promesa en la que nos indica si hay inventario sufuciente comparado 
con un objeto llamado carrito*/
const verificar=(carrito,inventario)=>{
  let flag=true //se define una bandera que es la que nos va a indicar si se cumple con la promesa
  return new Promise((resolve,rejects)=>{ //la funcion debe de retornar una new Promise() 
    setTimeout(()=>{for(let prod in carrito){  //la promesa lleva dentro la funcion que se va a expresar se hace un recorrido por el objeto carrito
      for (let exi in inventario){ //se hace un recorrido por el objeto inventario
        if(prod==exi){  //si el elemento del carrito es el mismo que el elemento del inventario 
          if(carrito[prod]>inventario[exi].cantidad){ //entonces se compara si la cantidad de carrito es mayor o menor al inventario
            flag=false //si la cantidad que se tiene en el carrito es mayor a la del inventario se manda a cambiar la bandera a False
          }
        }
      }
    }
  },3000)
    if(flag){ //si la bandera no cambió y se tiene que es cierto entonces se resuelve
      console.log('si hay inventario')
      resolve([carrito,inventario]) //se pone lo que quiera que indique cuando se rechaza
    }else{ //si la bandera cambio entonces se rechaza
      rejects('no hay inventario')
    }
  })
}

const calculo_total=(positivo)=>{
  let carrito=positivo[0]
  let inventario=positivo[1]
  let suma=0
  let monedero=2000
  return new Promise((resolve,rejects)=>{
    for(let arti in carrito){
      for(let inv in inventario){
        if (arti==inv){
          suma+=carrito[arti]*inventario[inv].precio
        }
      }
    }
    if(monedero>suma){
      resolve(console.log(`el total a pagar es $${suma}`))
    }else{
      rejects('no tienes dinero suficiente en tu monedero')
    }
    })
  }
//ahora se ponen los objetos que contienen el carrito y el inventario
const inventory={
  'playeras':{
    cantidad:3,
    precio:100
  },
  'short':{
    cantidad:10,
    precio:50
  }
}
let carrito={
  playeras:3,
  short:10
}
//para un .then() primero se pone la promesa y luego .then(()=>{return}) como argumento va a tomar lo que se ponga como resolve en la promesa
verificar(carrito,inventory).then((si)=>{return calculo_total(si)}).then((total)=>{return total})

//------------------------------------------------------------------------------
// /* promisse.all() acepta un arreglo con todas las promesas que queremos ejecutar en paralelo.
// puede retornar dos opciones 
// /Promisse.all() - Ejercicio
// */
// const checkAvailability = (itemName, distributorName) => {
//   console.log(`Checking availability of ${itemName} at ${distributorName}...`);
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if (restockSuccess()) {
//               console.log(`${itemName} are in stock at ${distributorName}`)
//               resolve(itemName);
//           } else {
//               reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
//           }
//       }, 1000);
//   });
// };

// // This is a function that returns true 80% of the time
// // We're using it to simulate a request to the distributor being successful this often
// function restockSuccess() {
//   return (Math.random() > .2);
// }

// const onFulfill = (itemsArray) => {
//   console.log(`Items checked: ${itemsArray}`);
//   console.log(`Every item was available from the distributor. Placing order now.`);
// };

// const onReject = (rejectionReason) => {
// 	console.log(rejectionReason);
// };

// // Write your code below:
// const checkSunglasses=checkAvailability('sunglasses','Favorite Supply Co.')
// const checkPants=checkAvailability('pants','Favorite Supply Co.')
// const checkBags=checkAvailability('bags','Favorite Supply Co.')

// Promise.all([checkSunglasses,checkPants,checkBags]).then(onFulfill).catch(onReject)

//------------------------------------------------------------------------------
// /* async y await se usan Cuando usas la palabra clave async antes de una función, 
// estás indicando que esa función será asíncrona. Esto significa que dicha función puede 
// contener operaciones que tomen tiempo, como llamadas a una API, consultas a una base de 
// datos o la lectura de un archivo, sin bloquear la ejecución del resto del código.

// Por otro lado, la palabra clave await se utiliza dentro de una función asíncrona para 
// esperar que una operación asíncrona se complete antes de continuar con la ejecución del código. 
// Básicamente, await pausa la ejecución de la función hasta que la promesa asociada con esa operación 
// asíncrona se resuelva o se rechace.
// ejemplo*/
// const asincrono=async()=>{
//     return 'hola mundo'
// }

//a diferencia de las promesas, un async va a tomar el valor de resolve cuando se cumple con la 
//condicion 

//como una funcion async devuelve una promesa, se puede usar then() catch()

// asincrono().then((si)=>{console.log(si)}) //imprime hola mundo porque es lo que retorna si la funcion
//                                         //se ejecuta correctamente  


/*await solo se usa en funciones async y se usa cuando se necesita esperar a que una promesa
se resuelva para continuar con la ejecución del cádigo*/

//vamos a definir una funcion que retorne una promesa
const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
        console.log(`I have to decide what's for dinner...`)
            setTimeout(() => {
                console.log('Should I make salad...?');
                        setTimeout(() => {
                            console.log('Should I make ramen...?');
                                setTimeout(() => {
                                    console.log('Should I make eggs...?');
                                        setTimeout(() => {
                                            console.log('Should I make chicken...?');
                                        resolve('beans');
                                            }, 1000);
                                }, 1000);
                        }, 1000);
            }, 1000);
    });
};

//ahora definimos una funcion async que se va a ejecutar cuando se ejecute la funcion brainstormDinner
const announceDinner=async()=>{
    let meal=await brainstormDinner()
    console.log(`I'm going to make ${meal} for dinner.`)
}
        
announceDinner()

// //la diferencia entre poner await y no poner. 
// //el operar await el valor de una promesa cuando se resuelve
// //por lo tanto si defefinimos la variable valor igual a await promesa, al imprimir esa variable nos imprimira el valor de la promesa como 
// //si se hubiera  hecho una promesa.

// //se define una promesa
// let myPromise = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Yay, I resolved!')
//       }, 1000);
//     });
//   }

// // se usa un async sin await
// async function noAwait() {
//     let value = myPromise();
//     console.log(value);
//    }
// //se poner async con await
// async function yesAwait() {
//     let value = await myPromise();
//     console.log(value);
//    }

// //se comparan las dos 
// noAwait() //imprime Promise { <pending> }
// yesAwait() //imprime Yay, I resolved!

// //asi es como funciona el async en una promesa
// //se va a definir una funcion que contiene una promesa
// //el resultado de esta promesa da el tipo de frijol
// const shopForBeans = () => {
//     return new Promise((resolve, reject) => {
//       const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
//     setTimeout(()=>{
//       let randomIndex = Math.floor(Math.random() * beanTypes.length);
//       let beanType = beanTypes[randomIndex];
//       console.log(`2. I bought ${beanType} beans because they were on sale.`);
//      resolve(beanType);
//     }, 1000);
//   });
//   }
// // se va a usar un funcion sin el async en la que se llama la promesa
// const soakTheBeans = ()=>{
//     console.log(`1. Heading to the store to buy beans...`);
//   let value = shopForBeans();
//   console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
// }
// //se ejecuta la funcion sin el async
//soakTheBeans()

/*imprime lo siguiente 

Promise { <pending> }
1. Heading to the store to buy beans...
3. Great! I'm making [object Promise] beans for dinner tonight!
Yay, I resolved!
2. I bought kidney beans because they were on sale.

el orden no es lineal ya que imprimio primero el 1 ,luego el 3 y por ultimo el 2
porque la promesa tiene un tiempo de espera de 1 segundo 
*/
// //se ejecuta la funcion con el async

// const funcion_con_async=async()=>{
//     console.log(`1. Heading to the store to buy beans...`);
//     let value = await shopForBeans();
//     console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
// }

// funcion_con_async()
/* al llamar la funcion imprime lo siguiente: 
1. Heading to the store to buy beans...
Yay, I resolved!
2. I bought pinto beans because they were on sale.
3. Great! I'm making pinto beans for dinner tonight!

lo que hace la funcion async es que no permite ejecutar la siguiente linea de codigo hasta que ese ejecuta la promesa
*/  

/* como es que funciona el async en un grupo de 2 o mas promesas?
el siguiente ejemplo cuenta con 3 promesas que se ejecutan hasta que se ejecuta su sucesora*/

// //primera promesa resuelve en tipo de frijol
// const shopForBeans1 = () => {
//     return new Promise((resolve, reject) => {
//         const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
//     setTimeout(()=>{
//         let randomIndex = Math.floor(Math.random() * 5);
//         let beanType = beanTypes[randomIndex];
//         console.log(`I bought ${beanType} beans because they were on sale.`);
//         resolve(beanType);
// }, 1000)
//   })
// }
// // segunda promesa toma como argumento el tipo de frijol y resuelve True
// const soakTheBeans1 = (beanType) => {
//     return new Promise((resolve, reject) => {
//     console.log('Time to soak the beans.');
//     setTimeout(()=>{
//     console.log(`... The ${beanType} beans are softened.`);
//     resolve(true);
//     }, 1000);
// });
// }
// //tercer promesa toma como argumento True y resuelve (dinner is served) 
// let cookTheBeans = (isSoftened) => {
//     return new Promise((resolve, reject) => {
//         console.log('Time to cook the beans.');
//         setTimeout(()=>{
//         if (isSoftened) {
//             console.log('... The beans are cooked!');
//             resolve('\n\nDinner is served!');
//         }
//         }, 1000);
//     });
// }

// //se ejecuta la funcion con el async
// // const funcion_async=async()=>{
// //     //dentro de la funcion se definen las variables, cada variable corresponde a una promesa
// //     let primera=await shopForBeans1();
// //     let segunda=await soakTheBeans1(primera)
// //     let tercera=await cookTheBeans(segunda)
// //     console.log(tercera)   
// // }

// // funcion_async()
// //imprime 
// // Time to soak the beans.
// // ... The black beans are softened.
// // Time to cook the beans.
// // ... The beans are cooked!


// // Dinner is served!

// // a diferencia que si el ejemplo anterior lo escribimos con .then() y .catch()
// shopForBeans1()
//     .then((value)=>{
//         return soakTheBeans1(value)
//     })
//     .then((value1)=>{
//         return cookTheBeans(value1)})

/* tambien se puede usar el async await cuando una promesa no se cumple con try y catch. 
es mas facil al momento de leer el codigo. 
Ejemplo:
hacer una promesa en la que devuelva si el numero random es menor de 0.5 que sea reject y si es mayor o igual a 0.5 que sea resolve.
*/
//definimos primero una funcion que retorne un valor random entre 0  y 1

const num_rand=()=>{
    let num=Math.random()
    if(num>=0.5){
        return true
    }else{
        return false
    }
}

//se define una promesa
const promesa=()=>{ //se define primero una funcion
    return new Promise((resolve,rejects)=>{ // dentro de la funcion debe de retornar new Promise((resolve,rejects)=>{
        //dentro de la promesa se pone una funcion setTimeout(func(),tiempo)  
        let num= num_rand()
        setTimeout(()=>{
            if (num){
                resolve('es mayor a 50')
            }else{
                rejects('es menor a 50')
            }
        },1000)
    })
}

//ahora se hace un async y await
const con_Try_hatch=async()=>{
    try{  //se pone como try lo que se quiere que tenga como valor de resolve en la promesa
        let promi=await promesa()
        console.log(`este es el resultado: ${promi}`)
    }catch(menor){ //va a imprimir lo que da como resultado reject
        console.log(`este es el resultado cuando se tiene reject en la promesa ${menor}`)
    }        
}

con_Try_hatch()


