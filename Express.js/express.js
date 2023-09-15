//uso de express.js
/* Se va hacer un ejercicio en e que se va a poner una direccion local de un servidor
(localhost:3000). en el que revise si los comensales llevan playera y zapatos
se les indique se se les esta buscando una mesa y si no cumplen con alguna de las dos
se indica que no se puede entrar.

primero se tiene que importar el modulo de express 
y luego guardarlo en una constante de preferencia llamada app */ 

const express=require('express')
const app=express()

//existe una libreria llamada morgan que imprime en la consola las caractresticas de la http. 
//como el status, la url entre otros, para eso, hay que invocarla primero. 

const morgan=require('morgan')

//despues se usa el uso que se le va a dar, es decir los middleware que es la funcion 
//que se va a ejecutar antes de que se ejecute el codigo que se le pase.
//se usa app.use(express.urlencoded({extended:true})) 
//para analizar los datos enviados en el cuerpo de una solicitud HTTP
app.use(express.urlencoded({extended:true}))

/* express.json es un middleware    que sirve para:
-Lee el cuerpo de la solicitud entrante.
-Verifica si el tipo de contenido de la solicitud es "application/json".
-Si el tipo de contenido es "application/json", analiza los datos JSON en el cuerpo de la solicitud y los convierte en un objeto.
-Almacena el objeto resultante en la propiedad req.body del objeto Request (req), lo que permite que puedas acceder a los datos
fácilmente en tus manejadores de rutas.
express.json() se encarga de analizar el cuerpo JSON y almacenarlo en req.body. 
Luego, en el manejador de ruta, podemos acceder a esos datos mediante req.body y trabajar con ellos.
*/
app.use(express.json());

//se usa app.use(express.json()) 
//utiliza para analizar los datos enviados en el cuerpo de una solicitud HTTP 
//con el tipo de contenido "application/json". 
//Se encarga de analizar los datos JSON recibidos en la solicitud y 
//los convierte en un objeto JavaScript que se puede utilizar en las rutas.
/* app.use se usa cuando se quiere que una funcion se repita de forma automatica dependiendo de las 
condiciones que se pongan en el use. por ejemplo :
app.use('/sorcerer', (req, res, next) => {
  console.log('User has hit endpoint /sorcerer');
  next();
});
siempre que se haga algun request ya sea GET o POST con la ruta /sorcerer se va a ejecutar lo que vienen 
en la funcion.
*/

//ahora se usa app.get(ruta,funcion()) el primer parametro es la ruta a la que se le va 
// a leer. mientras que el segundo parametro es la funcion que se va a ejecutar.

// app.get('/ingreso/:id',(req,res,next)=>{
//     const id=req.params.id //para acceder al id que se puso en la ruta se usa req.params.id
//     if(id==='1'){
//         const tieneCamisa=req.query.camisa==='si'
//         const tieneZapatos=req.query.zapatos==='si'
//         if(tieneCamisa && tieneZapatos){
//             res.send('puede entrar') //res.send es para enviar un mensaje al cliente
//         }else{
//             res.send('no puede entrar')
//         }
//     }else{
//         res.status(404).send('el id debe de ser 1') //se pone res.status(404) si no se encuentra la pagina  
//                                                     //puede ir pegado.send('mensaje')
//     }    
//     }
// )

//otro ejemplo usando app.get()
//primero se define un diccionario con los valores a comprobar
let equipos={america:{goles:3,puntos:30},chivas:{goles:1,puntos:10},pumas:{goles:2,puntos:20}}

app.param('equipo',(res,req,next,equipo)=>{
    req.equipo=equipo
    next()
})
//se hace un get el que revise si existe en la ruta el equipo basado en el diccionario equipos. si no que envie un mensaje que no existe
app.get(('/ligamx/:equipo'),(req,res)=>{ //se debe de poner (:) si se tienen varias opciones en este caso de equipos. 
    const revisaEquipo=equipos[req.params.equipo] //indica donde debe de buscar con req.param y la varible a buscar
    if(revisaEquipo){ //si es verdero, es decir si se encuetra en la lista equipos se envia el siguiente mensaje
        res.send(JSON.stringify(revisaEquipo)) //con JSON.stringify() nos va a mostrar el json de ese equipo. 
    }else{
        res.status(404).send('no existe el equipo')
    } 
})   //se corre desde terminal. node express.js y en el browser se pone http://localhost:3000/ligamx/america en la pagina nos dira: si existe el equipo

//existe una forma para reducir req.param.equipo usando app.params de la siguiente manera.
//primero definimos el middleware params 

//express tmb tiene diferentes metodos para HTTP como PUT DELETE POST
//en el caso de put se usa para actualizar y se usa de la misma forma que .get() 
//por ejemplo en caso de que se quiera cambiar un objeto un query se identifica a partir de ? en el link. y se separan por &
//si se quiere cambiar en el caso de equipos si se quiere cambiar pumas a {goles:15,puntos:23}
//se pondria de la siguiente manera:
//si se pone en el browser http://localhost:3000/ligamx/pumas?goles=15&puntos=23 
//con req.query tomaria a partir de ? es decir pumas?goles=15&puntos=23 que es igua a {goles:15,puntos:23}
//si se quiere acceder solo a goles tendria que poner  pumas.req.query.goles seria 15

/* 
En Express.js, req.params, req.body y req.query son propiedades del objeto req 
(que representa la solicitud HTTP) y se utilizan para acceder a los diferentes tipos de datos enviados en la solicitud.

req.params se utiliza para acceder a los parámetros de ruta capturados en la URL. 
Cuando defines una ruta con parámetros dinámicos, como /recursos/:id, 
los valores de esos parámetros se pueden acceder a través de req.params. 
Por ejemplo, si se realiza una solicitud a /recursos/1, puedes acceder al valor "1" utilizando req.params.id.

req.body se utiliza para acceder a los datos enviados en el cuerpo de la solicitud, 
como los datos enviados mediante un formulario HTML o una solicitud POST JSON. Sin embargo, para poder acceder a req.body,
debes utilizar middleware en tu aplicación Express.js, como express.json() o express.urlencoded(), 
para analizar el cuerpo de la solicitud y convertirlo en un objeto utilizable. 
Por ejemplo, si tienes un campo "nombre" en un formulario HTML y se envía una solicitud POST con ese campo, puedes acceder al valor utilizando req.body.nombre.

req.query se utiliza para acceder a los parámetros de consulta enviados en la URL. 
Los parámetros de consulta son pares clave-valor que se agregan al final de una URL después del símbolo de interrogación (?).
Por ejemplo, en la URL /recursos?id=1&categoria=2, puedes acceder a los valores "1" y "2" utilizando req.query.id y 
req.query.categoria, respectivamente. Los parámetros de consulta son útiles para filtrar, ordenar o paginar datos en una solicitud GET.
otros ejemplos serian:
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
*/

app.put('/ligamx/:equipo', (req, res) => {
    const equipoCambiar = req.params.equipo; //se seleciona el equipo que se puso en la url
    const goles = req.query.goles; //se selecciona el numero de goles que se pone en la url
    const puntos = req.query.puntos; //se selecciona el numero de puntos
    
    if (equipos[equipoCambiar]) {
      equipos[equipoCambiar].goles = goles;
      equipos[equipoCambiar].puntos = puntos;
      res.send(equipos[equipoCambiar]);
    } else {
      res.status(404).send('No existe el equipo');
    }
  }); 

/*
La función app.post() toma dos argumentos: la ruta y un controlador de ruta. 
El controlador de ruta es una función que se ejecuta cuando se realiza una solicitud POST a la 
ruta especificada. El controlador de ruta tiene acceso a dos objetos: req (objeto de solicitud) y res 
(objeto de respuesta), que se utilizan para manejar la solicitud y enviar la respuesta correspondiente al cliente.*/
//para agregar un nuevo equipo se pone el siguiente url http://localhost:3000/ligamx/azul?goles=11&puntos=24 
//sin embargo estos cambios no se verán reflejados en la tabla ni en la pagina, ya que para hacer un post se necesita una aplicacion 
//diferente o especial para hacer post, ya que un el browser solo sirve par hacer solicitudes get()
app.post('/ligamx/:equipo', (req, res) => {
    const equipo = req.params.equipo;
    const nuevoEquipo = req.body;
    equipos[equipo] = nuevoEquipo;
    res.send(equipos[equipo]);
  });
  
//para revisar que si se agrego el equipo 
//se pone el siguiente url http://localhost:3000/ligamx/azul


//por ultimo se pone el listen para que se ejecute el servidor
//por default el puerto es 3000
app.listen(3000,()=>{
    console.log('servidor corriendo en el puerto 3000')
    }
)
//para ejecutar se abre en el browser la siguiente direccion:
// la direccion debe de contar con la siguiente estructura
//<direccion>:<puerto>/<ruta>
//URL: http://localhost:3000/ingreso/1?camisa=si&zapatos=si

//para que el servidor se active en la terminal se debe de poner node express.js



