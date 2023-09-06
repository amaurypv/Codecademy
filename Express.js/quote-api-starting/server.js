/* crear un servidor en el puerto 4001 que tenga dos funciones, GET y POST */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//se importan  los datos de otro archivo y funciones.
const { quotes,autor } = require('./data');
const { getRandomElement} = require('./utils');
//se define el puerto en donde se va a ejecutar el servidor. 
const PORT = process.env.PORT || 4001;


//los middleware que se van a usar.
app.use(express.static('public'));
//middleware para el uso de json 
app.use(bodyParser.json());

//definir una ruta para que en la url /api/quotes/random mande una nota random de la lista definida en 
//data.js mediante la funcion getRandomElement() definida en utils.js 
app.get('/api/quotes/random',(req,res,next)=>{
    //se define la variable que contiene la nota random.
    let nota=getRandomElement(quotes)
    //se envia de tal forma que sea un json por eso se usa res.send()
    res.send({'quote':nota})
})

//hacer un get que devuelva un objeto con las notas del autor. 
app.get('/api/quotes',(req,res,next)=>{
    const nom_autor=decodeURIComponent((req.query.person))  
    const notas=autor(nom_autor)
    if((notas.length>0)){
        res.send({ quotes: notas});
    }else{
        res.status(404).send('no esta el autor')
    }
})
app.post('/api/quotes', (req, res) => {
    const { quote, person } = req.body;
  
    if (!quote || !person) {
      return res.status(400).json({ error: 'Both quote and person are required.' });
    }
  
    quotes.push({ quote, person });
  
    res.status(201).json({ message: 'Quote added successfully.' });
  });
  
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

