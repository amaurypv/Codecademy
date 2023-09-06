//en js se va a definir el handlebar definiendo una variable con las palabras

//const variable=Handlebars.compile(document.getElementById('greet').innerHTML) 
//puede ser de dos formas. primero definiendo el elemento del id y despues llamando 
//una constante template con Handlebar.compile(elemento).innerHTML
const source=document.getElementById('greet').innerHTML
const template=Handlebar.compile(source)
//despues se define otra variable que sea igual a un objeto y que como llave tenga 
//el nombre de la variable entre corchetes del html y el valor que se quiera poner

const variable={
    greeting:'hola'
}

//por ultimo para que se ejecute se define otra variable que sea igual la constante
//que contiene template y como argumento la constante que se definió como objeto

const variableHtml=template(variable)

//ahora se seleccionará el elemento que va a contener el template del html
//por ejemplo hay un div con id llamado 'hello' en el html
const paraLlenar=document.getElementById('hello')
//ya que se definió el objeto ahora se hara qe se cambie lo que se quiere poner mediante
//innerHtml=variable
paraLlenar.innerHTML=variableHtml
 


