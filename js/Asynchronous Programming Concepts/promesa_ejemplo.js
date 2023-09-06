// const { resolve } = require("path")

// let precios={
//     'lentes':10,
//     'playera':300
// }

// const prueba=(resolve,reject)=>{
//     if (precios.lentes>0){
//         resolve('si hay lentes')
//     }else{
//         reject('no hay lentes')
//     }
// }

// const promesa=new Promise(prueba)

// promesa.then(console.log('hola')) //va a imprimir hola, porque cumple con resolve


/*Crea una función llamada obtenerDatosUsuario que simule una solicitud asincrónica de
datos de un usuario a través de una API. La función debe recibir un parámetro userId y 
debe devolver una promesa. La promesa debe resolver con un objeto que contenga el nombre 
y la edad del usuario si la solicitud es exitosa. Si ocurre un error durante la solicitud, 
la promesa debe rechazarse con un mensaje de error.*/

// let pedido=['lentes',1]

// const confirma_pedido=(pedido)=>{
//     return new Promise((resolve,reject)=>{
//         if (pedido[1]>0){
//             resolve('pedido realizado')
//         }else{
//             reject('no hay stock')
//         }
//     })
// }
// let confirmacion=console.log('pedido confirmado')
// confirma_pedido(pedido).then(confirmacion)


/* como funciona una funcion async await */
let verdadero=true
const primera=()=>{ //esta promesa va a tardar 2 segundos en terminar de ejecutarse desde que se llama
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (verdadero){
                resolve('esta se imprime 2 segundos despues de que se llamo la funcion')
            }
        },2000)
    })
}

const segunda=()=>{ //esta funcion se ejecuta en el momento en que se llama
    console.log('esta funcion se debe de ejecutar hasta que haya terminado de ejecutarse la primera')
}

const con_espera=async()=>{
    let ejemplo1=await primera()
    console.log(ejemplo1)
    let ejemplo2=segunda()
}

con_espera() /*se imprime 
esta se imprime 2 segundos despues de que se llamo la funcion
esta es la segunda
se imprimio de forma que no se ejecutó la variable ejemplo 2 hasta que terminara de ejecutarse ejemplo 1.*/

const serveDinnerAgain=async()=>{
    const foodArray=Promise.all([steamBroccoli(), cookRice(), bakeChicken(),cookBeans(),])
}