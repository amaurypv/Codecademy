let alcohol=1.19
let acetona=1.2 
let cabosilm5=20.85
let cabosilts610=32.05
let cabosilts720=31.78

const cotizacion=(costo,utilidad)=>{
    return costo/(1-(utilidad*.01))
}

const calcutilidad=(costo,venta)=>{
    let utilidad=((venta-costo)/venta)
    return utilidad*100
}

console.log(calcutilidad(20.85,26.1))
