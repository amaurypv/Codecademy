/*click: El evento click se desencadena cuando el usuario hace clic en un elemento.
dblclick: El evento dblclick se desencadena cuando el usuario hace doble clic en un elemento.
mouseover: El evento mouseover se desencadena cuando el usuario mueve el cursor del mouse sobre un elemento.
mouseout: El evento mouseout se desencadena cuando el usuario mueve el cursor del mouse fuera de un elemento.
mousedown: El evento mousedown se desencadena cuando el usuario presiona un botón del mouse mientras está sobre un elemento.
mouseup: El evento mouseup se desencadena cuando el usuario suelta un botón del mouse después de hacer clic en un elemento.
mousemove: El evento mousemove se desencadena cuando el usuario mueve el cursor del mouse sobre un elemento.
contextmenu: El evento contextmenu se desencadena cuando el usuario hace clic con el botón derecho del mouse en un elemento.*/
const cuerpo=document.querySelector('body')
const boton=document.querySelector('button')
/* cuando se quiere que el boton cambie de color el fondo se define una funcion
dentro de la funcion se indica que si el fondo es de un color, cambiarlo a otro color
*/
const cambioFondo=()=>{
    if(cuerpo.style.backgroundColor==='ghostwhite'){
        cuerpo.style.backgroundColor='orange'
    }else{
        cuerpo.style.backgroundColor='ghostwhite'
    }
}
//ya se que se definió la función, se hace el event listener de la siguiente forma: 
boton.addEventListener('click',cambioFondo)

//para añadir elementos primero se crea un elemento con createElement('elemento') ya sea p,h1,li
const nuevo=document.createElement('li')
//se define el elemento del que se quiere poner
const lis=document.getElementById('lista')
// se pone lo que quiera contener el nuevo elemento
nuevo.innerHTML='punto 4'
// se va agregar como una hija del elemento que se definio
lis.appendChild(nuevo)

//para apregar un elemento por medio de una funcion 
const agregar=()=>{
    const punto=document.createElement('li') //se define el elemento
    punto.textContent='punto nuevo' //se pone lo que quiera contener el texto
    lis.appendChild(punto)  //se añade un child por medio del appendChild()
}

const bl=document.getElementById('botonlista')
bl.addEventListener('click',agregar)

const botoneliminar=document.getElementById('eliminar')
//para eliminar un elemento
const eliminar =()=>{
    const ultimo=lista.lastChild //se selecciona el child en este caso es el ultimo lastChild
    lis.removeChild(ultimo) //para eliminar un child es removeChild()
}

botoneliminar.addEventListener('click',eliminar)

/*para hacer que aparezca un parrafo que previamente esta escrito en el archivo
de html se tiene que poner en css display=none
y despues hacer una funcion que se indice el elemento.style.display='block
*/
const botoparrafo=document.getElementById('botonaparecer')
const parrafo=document.getElementById('ocultar')

const mostrarParrafo=()=>{
//para que el boton haga la funcion de aparacer y desaparecer se tiene que poner un if
    if(parrafo.style.display==='none'){
        parrafo.style.display='block'
    }else{
        parrafo.style.display='none'
    }
}
//no necesariamente tiene que ser el objetivo un boton, incluso puede ser un parrafo
botoparrafo.addEventListener('mouseover',mostrarParrafo)
