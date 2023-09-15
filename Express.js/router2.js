//se va hacer un router con la ruta para router2
//primero se va a llamar a la framework express
const express=require('express');
//despues se crea la instancia router2
const router2=express.Router();
//se crea la ruta para router2
router2.get('/router2',(req,res)=>{
    res.send('soy la ruta 2')
});
//se exporta el router2
module.exports=router2;

