//en lugar de usar if else
const precios=articulo=>{
    const articulos={
        'coca':10,
        'pepsi':5,
        'fanta':15,
        'jarrito':22
    }
    console.log(articulos[articulo])
}

precios('pepsi')


const carrito=[
    {producto:'cafe',precio:15,cantidad:1},{producto:'pan',precio:10,cantidad:2}
]

    const numeros=[1,2,3,4,5];
    const sumatoria=numeros.reduce((a,b)=>a+=b)
    console.log(sumatoria)

    const ran=Math.floor(Math.random()*numeros.length)
    console.log(numeros[ran])