
//para pintar el fondo de azul se define el cuerpo 
let padre=document.body
//ahora se indica que se va hacer con la parte seleccionada.
//para cambiar el color se usa style.background='color'
padre.style.backgroundColor='beige'

// para modificar el texto de un elemento existente
//se selecciona el elemento, en este caso es querySelector()
// dentro del parentesis se pone el selector en este caso h1 si fuera un 
// id se usaria #id, si fuera una clase se usaria .class si se tuviera 
//mas de un elemento de la misma clase se tiene que usar un selector [0]
let ache1=document.querySelector('h1')
//para modificar se toma el objeto seleccionado y se pone innerHTML='texto modificado'
ache1.innerHTML='esta es una prueba para trabajar DOM'

//para crear un elemento que contenga las caracteristicas de una clase en este caso un punto de la lista se define primero 
//el elemento a añadir usando createElement('elemento')
let lista=document.createElement('li')
//definir el elemento 
let idlista1=document.getElementsByClassName('lista1')[0]
//establever el nuevo elemento al id
lista.className=idlista1
//luego se define que va a contener el elemento
lista.innerHTML='punto 4 añadido por DOM'
//se selecciona el padre de donde se va añadir el nuevo elemento
let claselista=document.getElementsByClassName('lista')[0]
//para añadir el elemento es appendChild(elementonuevo) 
claselista.appendChild(lista) 

//seleccionar el elemento
pe=document.querySelector('p')
//para cambiar el color del elemento seleccionado
pe.style.color='red'

//para generar una accion a un elemento, primero se selecciona el elemento
//en este caso es un boton usando document.querySelector('elemento')
let boton=document.querySelector('button')
//se define una funcion con lo que se quiera que haga el elemento al hacer 
//click en el 
const color=()=>{
    boton.style.backgroundColor='red'
}
//se toma el elemento seleccionado y se pone onclick igual a la funcion
//definida anteriormente. 
boton.onclick=color

let idcolor=document.getElementById('colorfondo')
idcolor.style.backgroundColor='red'

let quitar=document.getElementById('quitar')
padre.removeChild(quitar)

//para añadir un evento se puede usar elementoHTML.addEventListener(evento, funcion);
//donde elemento es el elemento antes asginado. 
//event es el evento al que se quiere agregar el listener, (click)
// y function es la funcion de lo que se quiere hacer 
