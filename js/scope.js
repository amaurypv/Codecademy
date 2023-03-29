
/*las variables se pueden definor por scopes, es decir dentro de funciones o de forma global 
sin embargo es mejor definirlas en scopes.*/

// let color='amarillo';  //se define la variable como global scope
// const decircolor=()=>{
// 	let color="rojo"   //se define la variable dentro de la funcion
// 	console.log(color)
// }

// console.log(decircolor()) //imprime el color que se definio dentro de la funcion (rojo) 
// console.log(color) // imprime el color que se definio de forma global (amarillo)



// se cambio el valor de la variable sin declararla como una nueva ademas de que 
//el scope global solo se definio como let no como const


// let color='amarillo';  //se define la variable como global scope
// const decircolor=()=>{
// 	color="rojo"   //se define la variable dentro de la funcion
// 	console.log(color)
// }

// console.log(decircolor()) //imprime el color que se definio dentro de la funcion (rojo) 
// console.log(color) // como ya se cambio el valor aunque fuera dentro de la funcion 
// 					// se cambio tambien en global (rojo)


/*si se define como const, y se quiere cambiar el valor aunque fuera dentro de una funcion 
marca error*/

// const color='amarillo';  //se define constante como global scope
// const decircolor=()=>{
// 	let color="rojo"   //se define la variable dentro de la funcion
// 	console.log(color)
// }

// console.log(decircolor()) //como se definio el color dentro de la funcion se cambia (rojo)
// console.log(color)        //no se cambió la definición ya que se definio como const (amarillo)


