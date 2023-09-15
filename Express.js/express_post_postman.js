/*ejemplo para entender como funcion una solictud POST de express
las solicitudes POST se tienen que hacer desde una api ya que a diferencia de una solicitud GET (que se puede usar desde un browser)
la api postman es la que se va a usar para este tipo de ejercicios. 
en la que se van a poner datos en formato json y nos va aparecer en la terminal de este documento.
*/
const express=require('express'); //se importa express
const app=express() //se define la constate app para el uso de express()
const port=3001  //se define el puerto de el servidor en el que se va a trabajar
//para conocer los middlewares mas comunes 
//https://expressjs.com/en/resources/middleware.html
//
app.use(express.json())
//hacer un json de paises

const paises=[{'Mexico':'CDMX'},{'USA':'Washington D.C.'}]

app.get('/inicio',(req,res)=>{
    res.send('prueba 1')
})

app.get('/inicio/:pais',(req,res)=>{
    const pais=req.params.pais
    const indice=paises.findIndex(x=>Object.keys(x)[0]===pais)
    const capital=paises[indice][pais]
    if(indice===-1){
        res.send('pais no encontrado')
    }else{
        res.send(`la capital de ${pais} es ${capital}`)
    }

}   
)
     

//para ejecutarlo en la aplicacion postman, se abre el programa, despues se selecciona el request que se
//quiere hacer en este caso post y se pone el url 
app.post('/api/posts',(req,res,next)=>{
    const data=req.body
    console.log(data)
    res.json(data)
})

app.post('/api/posts/capital', (req, res, next) => {
    const { pais, capital } = req.body;  // en postman se pone {pais:"  ", capital:"     " }
    const nuevoPais = {}; //se define un nuevo objeto vacio que es el que se va agregar a la lista
    nuevoPais[pais] = capital;  // se define el objeto que se va agregar a la lista
    paises.push(nuevoPais);  // Agregar el objeto a la lista de países
    res.json(paises);  // Responder con el nuevo país agregado
    console.log(paises);
});



app.listen(port,()=>{
    console.log(`estas en el puerto ${port}`)
})
