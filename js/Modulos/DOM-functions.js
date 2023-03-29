const clickMostrar=(elemento)=>{
    if (elemento.style.display==='none'){
        elemento.style.display='block'
    }else{
        elemento.style.display='none'
    }
}

const cambioColor=(elemento)=>{
    const a=Math.random()*255
    const b=Math.random()*255
    const c=Math.random()*255
    elemento.style.background=`rgb(${a},${b},${c})`
}

const fuentes={clickMostrar,cambioColor}
export default fuentes

