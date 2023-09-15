//el router.param se usa en express como middleware y sirve para evitar poner todas las rutas.
//ejemplo:
const express = require('express');
const app=express()
const port=3000;

//para usar el app.param debemos pasarle el parametro y la funcion que se va a ejecutar
app.param('id',(req,res,next,id)=>{ //como argumento le pasamos el parametro que queremos usar
    req.id=id;  //se define la variable que va a tener el parametro siempre como req.y el parmatro
    next(); //siempre en un middleare se debe de poner next()
})

app.get('/user/:id',(req,res)=>{
    res.send(`user ${req.id}`)  //como ya se definio el parametro en el middleware solo se pone req.id
})

//ejemplo 2

app.listen(port,()=>{
console.log(`server on port ${port}`)
})