/*
JSON (JavaScript Object Notation) es un formato de intercambio de datos 
ligero y legible por humanos. Se utiliza para representar información estructurada 
como objetos y arrays utilizando una sintaxis similar a la de JavaScript.
Un JSON consiste en pares de clave-valor, donde las claves son cadenas de texto y 
los valores pueden ser de diferentes tipos, como cadenas, números, booleanos, 
objetos anidados o arrays */

//para convertir json a objetos de js. 
//el siguiente es un json
const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }'

//para convertir el json en objeto, se usa JSON.parse(json_a_convertir)
const jsObject=JSON.parse(jsonData)

console.log(jsObject)
console.log(jsObject.book.name, jsObject['book']['price']) //imprime JSON Primer, 29.99



//para convertir un objeto a JSON. 
const objetoJS={modelo:'jetta', marca:'volkswagen', año:2010}
const objAJSON=JSON.stringify(objetoJS)
console.log(objAJSON)

fetch('https://api-to-call.com/endpoint').then(response => {
    if(response.ok){
        return response.json()
    }
    throw new Error('Request failed!')
},networkError => console.log(networkError.message)).then(jsonResponse => {})


//------------------------------------------------------------
/*fecth GET
En JavaScript, el objeto fetch es una función incorporada en los navegadores modernos
que se utiliza para realizar solicitudes HTTP. No es necesario definirlo manualmente, 
ya que viene precargado en los navegadores que admiten la API Fetch.
El objeto fetch proporciona una interfaz para enviar y recibir solicitudes HTTP, y 
devuelve una promesa que se resuelve con la respuesta a la solicitud. 
Puedes utilizarlo para realizar solicitudes GET, POST, PUT, DELETE, y más.*/


//como se compone una funcion fetch()
fetch('https://jsonplaceholder.typicode.com/posts') //manda la requisición
  .then(response => {
    if (response.ok) {
      return response.json();                    //convierte la respuesta en un objeto JSON
    }
    throw new Error('Request failed!');          //en caso de error que hacer
  })
  .then(posts => {                             // que hacer con el objeto JSON
    console.log(posts);
    // Hacer algo con los datos de los posts
  })
  .catch(error => {
    console.log(error.message);
  });

//------------------------------------------------------------
/*fecth POST
El fetch POST se utiliza para enviar datos al servidor, generalmente para crear 
o actualizar información en el servidor. 
Al utilizar la función fetch para realizar una solicitud POST, 
debes incluir varios parámetros dentro del segundo argumento del fetch. 
Aquí tienes los parámetros más comunes que se utilizan en una solicitud POST:
1. method: Especifica el método HTTP a utilizar, en este caso, "POST".
2. headers: Un objeto que contiene los encabezados de la solicitud, 
como el tipo de contenido y cualquier otra información relevante. 
Por ejemplo, si estás enviando datos en formato JSON, puedes especificar 'Content-Type': 'application/json'.
3. body: Los datos que deseas enviar en el cuerpo de la solicitud. 
Puedes pasar diferentes tipos de datos, como un objeto JavaScript, un FormData, un Blob, etc. 
Si estás enviando datos en formato JSON, debes utilizar JSON.stringify() 
para convertir el objeto JavaScript en una cadena JSON.*/
const postData = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

fetch('https://api.example.com/users', { //se pone como primer parametro la url que contiene la api.
  method: 'POST', // en forma de objeto se va  a poner todo lo siguiente: metodo siempre va a ser POST
  headers: {   // es un objeto que contiene los encabezados de la solicitud,  
    'Content-Type': 'application/json' //como el tipo de contenido y en algunos casos la llave de la api apikey
  },
  body: JSON.stringify(postData)  //en el cuerpo (body) los datos que envian, se deben de enviar en formato JSON
})
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  })
  .then(data => {
    console.log(data);
    // Hacer algo con la respuesta del servidor
  })
  .catch(error => {
    console.log(error.message);
  });

//------------------------------------------------------------
/*fetch() GET con async y await
como la funcion fetch() retorna una promesa se puede usar async y await de la siguiente manera*/

const fetchConAsync=async()=>{
  try{
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    if(response.ok){
      return response.json()
    }
    throw new Error ('request failed¡')
  }
  catch (error){
    console.log(error)
  } 
}

//otro ejemplo de un fetch() GET

const getSuggestions=async()=>{
  const wordQuery=inputField.value
  const endpoint=url+queryParams+wordQuery
  try{
    const response=await fetch(endpoint,{cache:"no-cache"})
    if (response.ok){
      console.log(response.json())
    }


  }catch(error){
    console.log(error)
  }
}
