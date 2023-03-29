let cuerpo=document.body
let uno=document.getElementById('primero')
let dos=document.getElementById('segundo')
let tres=document.getElementById('tercero')
let botones=document.getElementById('boton')
function cambia(){
    uno.style.color='white'
    dos.style.color='white'
    tres.style.color='white'

}
botones.addEventListener('click',cambia)