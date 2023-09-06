const express = require('express');
const app = express();
const port = 3000;
//hay un middleware que se utiliza para generar registros (logs) de las solicitudes HTTP
// que llegan al servidor. Proporciona información detallada sobre cada solicitud, 
//como la URL, el método HTTP, el código de estado de la respuesta y más
const morgan=require('morgan')
app.use(morgan('short'))  //imprime ::1 - GET /randomode HTTP/1.1 200 26 - 22.917 ms 

//app.use es un middleware que se ejecuta en cada peticion que corresponda con la url
//en este caso todas las peticiones que empiecen con /whatis/:fruit
app.use('/whatis/:fruit',(req, res, next) => {
  const fruit = req.params.fruit;
  if(!fruit) {
    res.status(400).send('Please provide a fruit');
  }else{
    res.send(fruit); 
  }
})

//hay funciones que se encargan de mostrar el error sin que se bloquee el codigo.

const errorHandler=(err,req,res,next)=>{
    if(!err.status){
        err.status=500
    }
    res.status(err.status).send(err.message)
}
//ya que se definió la funcion para manejar errores se pone en un middleware
app.use(errorHandler)

//como ya se definió el middleware anteriormente, solo se pide imprimir positivo
app.get('/whatis/:fruit',(req,res)=>{
    console.log(req.params.fruit)
});


//ahora un ejemplo de un middleware que se ejecuta en todas las peticiones
const moods = ['happy', 'exuberant', 'fanatical about middleware'];
const randomMood = (req, res, next) => {
    const random=Math.floor(Math.random()*(moods.length))
    const modo=moods[random]
    res.send(`${modo}`)
    console.log(random)
    next()
}
app.get('/randomode',randomMood)
const database = {
    snacks: ['chips', 'apple', 'cookies'],
    sides: ['beans and rice', 'cole slaw', 'broccoli'],
    appetizers: ['oysters', 'dumplings', 'smoked almonds'],
};

//un ejemplo en donde se use req.variable para no repetirlo en todas las request
//primero se define una constante
const timeMiddleware = (req,res,next) => {
    req.Date=Date.now() //se debe de poner req.variable siempre
    next() //siempre poner next()
};
//ahora se define un middlewaew
app.use(timeMiddleware)

app.get('/snacks', (req, res, next) => {
    res.send(`Snacks as of ${req.Date}: ${database.snacks}`); //se debe de poner req.variable como se definio en el middleware
});
  
app.get('/sides', (req, res, next) => {
    res.send(`Sides as of ${req.Date}: ${database.sides}`);
});
  
app.get('/appetizers', (req, res, next) => {
    res.send(`Appetizers as of ${req.Date}: ${database.appetizers}`);
});
  
app.listen(port, () => {
    console.log('estas en el puerto 3000')})

