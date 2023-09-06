//los routers se usan para definir las rutas de nuestra aplicacion
//primero importamos express
const express = require('express');
//definimos la constante router con el metodo router de express
const router1 = express.Router();
//se definen get y post para las rutas 
router1.get('/', (req, res) => { //la ruta raiz de la aplicacion
    res.send('soy router 1');
})

//exportamos el modulo router para poder utilizarlo en otros archivos
module.exports= router1
// abrimos el archivo router2.js para seguir con este ejemplo. 


