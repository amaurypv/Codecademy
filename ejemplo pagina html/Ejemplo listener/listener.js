//primero se definen los id con los que vamos a trabajar
let boton=document.getElementById('read')
let escondido=document.getElementById('more-info')
let botoninfo=document.getElementById('ocultar')
//se define una funcion para que el elemento escondido aparezca
function aparece(){
    escondido.style.display='block' //en css esta como none, con esta funcion se cambia a block
    botoninfo.style.display='block'
}

function ocultarinfo(){
    escondido.style.display='none'
    botoninfo.style.display='none'
}

botoninfo.addEventListener('click',ocultarinfo)
//para agregar una accionlistener se seleciona el elemento. 
//el primer elemento e  s la accion, siempre se debe de poner entre
// comillas y luego el segundo argumento la funcion  
boton.addEventListener('click',aparece)

let botonimagen=document.getElementById('aparece');
let imagen=document.getElementById('codey');
let botonesconder=document.getElementById('esconder');

function paraImagen(){
    imagen.style.display='block'
    botonesconder.style.display='block'
}
//sirve para lo mismo que addEventListener se tiene que poner 
//on y la accion, la funcion solo acepta una
botonimagen.onclick=paraImagen 

function paraesconder(){
    imagen.style.display='none'
    botonesconder.style.display='none'
}

botonesconder.addEventListener('click',paraesconder)

//hay ocasiones en las que solo se quiere que se ejecute una sola vez
//la accion de un listener, para eso sirve removeEventListener()
//se puede poner dentro de la funcion que se quiera ejecutar
//y dentro del parentesis se tiene que poner la misma accion y 
// y la funcion en la que se ejecutó. 

//primero se define un array, en donde contenga todas las opciones a mostrar
let mensaje=  ["A beautiful, smart, and loving person will be coming into your life.",
"A fresh start will put you on your way.",
"A golden egg of opportunity falls into your lap this month.",
"A smile is your personal welcome mat.",
"All your hard work will soon pay off."]


//se definen los mensajes y los elementos
let botonsuerte=document.getElementById('botonsuerte');
let mensajesuerte=document.getElementById('mensajesuerte');

//se define la funcion 
function suerte(){
    let num=Math.floor(Math.random()*5)
    mensajesuerte.innerHTML=mensaje[num]
    botonsuerte.innerHTML='Gracias'
    botonsuerte.removeEventListener('click',suerte) //para que solo se ejecute una sola vez
}


/* otros eventos del mouse 
click: se dispara cuando se hace clic en un elemento con el botón izquierdo del mouse.
dblclick: se dispara cuando se hace doble clic en un elemento con el botón izquierdo del mouse.
mousedown: se dispara cuando se presiona el botón izquierdo del mouse mientras se está sobre un elemento.
mouseup: se dispara cuando se suelta el botón izquierdo del mouse después de hacer clic en un elemento.
mousemove: se dispara cuando se mueve el mouse sobre un elemento.*/

/*In this exercise, you’ll modify the list elements using mouse events. 
You can use the reset element that is already programmed to set the other 
list element back to their default styles.
First, create a function called increaseWidth() 
that changes the .width of itemOne to any size greater than '400px'. */
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

let reset = function() {
    itemOne.style.backgroundColor = ''
    itemTwo .style.backgroundColor = ''
    itemThree.innerHTML = 'The mouse must leave the box to change the text'
    itemFive.style.display = "none"
};
resetButton.onclick = reset;
function increaseWidth(){
    itemOne.style.backgroundColor='pink'
}
// Now, create an event handler for itemOne that will trigger the
// increaseWidth() function when the mouse hovers on it.
itemOne.addEventListener('click',increaseWidth)
//Next, create a function called changeBackground()
//that changes the .backgroundColor of itemTwo.

function changeBackground(){
    itemTwo.style.backgroundColor='orange'
}

itemTwo.addEventListener('mouseup',changeBackground)

//Now, create a function called changeText() that changes 
//the text of itemThree to 'The mouse has left the element'.
const changeText(){
    itemThree.innerHTML='The mouse has left the element'
}

