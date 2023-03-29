/*en el metodo DOM se puede modificar el contenido de un archivo html
indicando el siguiente comando document.body.innerHTML 
despues de la palabra documento, se pone la parte del documento que se
quiere modifica, en este caso es todo el cuerpo del documento. seguido del 
la palabra innerHTML  asignando la tarea que se quiera hacer
en el siguiente ejemplo se quiere que en el cuerpo se ponga un encabezado 
con h1 y que diga This is now the heading of the body element en este caso 
se debe de poner todo entre comillas desde <h1>
en el archivo html en el titulo se tiene que definir cual es el archivo 
al que va a estar ligado ese documento html y se pone de la siguiente forma:
<script src="./DOM.js" async></script> cuando el archivo js esta en la misma carpeta
se pone ./ despues de la src que va dentro del corchete script 
*/
//document.body.innerHTML='<h1>This is now the heading of the body element</h1>' 


/* tambien se puede agregar elementos o editar elementos en un documento 
por clase,id o elemento. 
document.getElementsById('nombre del id').innerHTML='palabra a cambiar'
document.getElementsByTagName('nombre del elemento puede ser li')[posicion].innerHTML='nombre a cambiar'
document.getElementsByClassName('nombre de la clase')[0].innerHTML='cambio' siempre se que poner [0]
incluso si solo se tiene un elemento de esa clase ya que devuelve una lista de los elementos
que hay de esa clase aunque sea solo uno, si no se hace referencia, tomará todo el documento 
lo que puede provoca errores

*/
// Use the .querySelector() method to select the first 'h1' element. 
// Access that element’s .innerHTML property to change the h1 title to
// 'Most popular Harry Potter characters'.
let h1= document.querySelector('h1')
h1.innerHTML='Most popular Harry Potter characters'
// Use the .getElementById() method to access the element with an ID of 'fourth'.
// Set that element’s inner HTML to read 'Professor Snape'.
let cuarto= document.getElementById('fourth')
cuarto.innerHTML='Professor Snape' //inner se usa para defiiner un nuevo elemeto 
// Use the .getElementsByClassName() method to access the first element
// with the class name of 'slytherin'. Replace that element’s inner HTML
// with the text 'Salazar Slytherin'.
let siltherin=document.getElementsByClassName('slytherin')
siltherin.innerHTML='salazar Slytherin'
// Use the .getElementsByTagName() method to access the first element with the 
// <li> tag. Access that element’s .innerHTML to replace the content to read 'Dobby'
let lista= document.getElementsByTagName('li')[4]
lista.innerHTML='Dobby'
/* tambien se pueden cambiar los estilos de una pagina sin el css en javascript
un ejemplo seria primero definir el elemento. 
ejemplo seleccionar el elemento class='ranking*/
let cuerpo= document.body //se pone porque ese se usa en css para clases
//ya que se tiene seleccionado el elemento se procede a hacer el cambio. 
cuerpo.style.backgroundColor='#201F2E'
//cambiar el color de las letras de h1 a verde
let  ache1=document.getElementsByTagName('h1')[0] //si se va usar bytagname se tiene que especificar la posición en caso de que sea el
                                                //unico se tiene que poner [0]  
ache1.style.color='white'

// let encabezado=document.getElementsByClassName('heading')[0]
// encabezado.style.fontFamily='Roboto'

let segundo= document.getElementById('second')
segundo.style.color='yellow'

/*parentnode y children sirve para acceder a los nodos de un documento.
nos da como resultado un arreglo, en donde nos enlista los hijos o los padres que
tiene el elemento */

/*para crear un nuevo elemento se debe de definir como los anteriores */

let newAttraction=document.createElement('li')
// si ya se definió se puede generar un id, una clase o agregar un texto como se 
//hizo en los ejercicios anteriores. 
newAttraction.id='vespa'  //se crea un id='vespa' al elemento de la lista. 
newAttraction.innerHTML='Rent a Vespa' //para darle el texto.
document.getElementById('italy-attractions').appendChild(newAttraction) //para insertarla
// se selecciona el lugar donde se quiera poner y se pone .appendChild() dentro del 
//parentesis va la varible que ya definimos. 

//para eliminar se define el padre y despues removeChild(elemento a eliminar)
let elementToRemove=document.getElementById('vespa')
document.getElementById('italy-attractions').removeChild(elementToRemove)

/*onclick se utiliza para ejecutar una función de JavaScript 
cuando se hace clic en un elemento. Puedes asignar una 
función a este atributo utilizando JavaScript de la siguiente manera:*/
let element=document.querySelector('button')
const cambiaColor=()=>{
    element.style.display='red'
}
element.onclick=cambiaColor 