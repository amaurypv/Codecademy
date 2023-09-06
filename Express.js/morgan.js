/* 
La librería morgan es un middleware popular en Express.js que se utiliza para generar registros (logs)
de las solicitudes HTTP que llegan al servidor. Proporciona información detallada sobre cada solicitud,
como la URL, el método HTTP, el código de estad o de la respuesta y más. 
Esto es útil para monitorear y depurar tus aplicaciones web.
*/

const express=require('express')
const app= express()
const puerto=3001
const morgan=require('morgan') //se importa la libreria
//usando morgan(tiny) se va a definir un middleware en que cada vez que se haga una solicitud http se imprima en la consola
//que tipo de solicitud es (GET,POST, DELETE), si se llevó a cabo de forma correcta o incorrecta(200,300) y el tiempo que se taro en ejecutar
app.use(morgan('common'),(req,res,next)=>{
  console.log('imprimiendo')
  next()
})

//existen otras variantes aparte del tiny, por ejemplo morgan('dev') que el resultado lo pone en color verde si fue satisfactorio (200)
//o tambien 'common' que escribe el id, la fecha en que se ejecutó, la solicitud y el tiempo. 
app.use('/user/:id',(req,res,next)=>{
  const usuario=req.params.id 
  res.send(`usuario: ${usuario}`)
  console.log(`usuario:${usuario}`)
  next()
})


app.get('/',(req,res,next)=>{
  res.send('prueba 1')
  next()
})

app.get('/user/:id')

app.listen(puerto,()=>{
  console.log(`listening on ${puerto}`)
})
