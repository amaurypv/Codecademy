const fibo=(n)=>{
    let a=1
    let b=0
    let t 
    while (n>0){
        t=a
        a=a+b
        b=t
        n--
    }
    return b
}

let vikan='Jalador de mano Vikan, ultrahigiénico, 250 mm, verde'
const mayus=vikan.toUpperCase()
console.log(mayus)
