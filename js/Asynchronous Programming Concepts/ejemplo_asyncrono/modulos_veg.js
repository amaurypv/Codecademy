
const frijol=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('frijoles bayos')
        },2000);
    })
}

const fruta=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('mango')  
        }, 2000);
    })
}

const bebida=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('agua de limon')
        }, 2000);
    })
}

//para exportar las funciones se usa module.exports
module.exports={frijol, fruta, bebida}