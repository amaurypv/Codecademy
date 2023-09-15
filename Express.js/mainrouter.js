//en el archivo router.js y router2.js creamos un router que se encargara de manejar las rutas de nuestro proyecto
//se importara esa funcion, pero primero se importara express 
const express = require('express');
//se crea la instancia de express
const app=express();
//se importa el archivo de rutas
const router1=require('./router1');
const router2=require('./router2');
//se le asigna a la variable app la funcion router
app.use('/router1',router1); //en el use, se puede poner la ruta que se quiere que se ejecute y se quita del get. 
app.use(router2);
//se crea una instancia para oir
app.listen(3000,()=>{
    console.log('server on port 3000');
})
//se corre el servidor en terminal con el comando node mainrouter.js
//en el navegador se ingresa a localhost:3000

