/* para exportar formulas de un archivo hay dos formas
La primera, primero se define la funcion y despues se exporta
*/
const cAF=(celsius)=>{
    return celsius* 9/5 + 32
}

//luego se exporta la funcion de la siguiente forma: 
module.exports.cAF=cAF   //se pone module.exports.comosevaidentificarlafuncion=funcion

//otra forma de exportar es definir la funcion dentro de la misma linea de exportar.

module.exports.fAc=(far)=>{
    return (far-32)*(5/9)
}

const kelvin=(cesls)=>{
    return cesls+273
}
module.exports.kelvin=kelvin


//para que se reflejen estas funciones en otro documento, es necesari importarlas mediante
//la forma de require()


