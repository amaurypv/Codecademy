/*CORS Cross-Origin Resource Sharing" (Compartir Recursos entre Orígenes Cruzados), y es una medida 
de seguridad implementada en los navegadores web para controlar las solicitudes HTTP 
entre diferentes dominios o sitios web*/
const express=require('express')
const app=express()
const cors=require('cors')
const port=3000

app.use(cors())

const secretData = {
  adminUsers: ['1', '2', '51'],
  coolPhoneNumbers: ['555-555-CODE', '555-EXP-RESS', 'MID-DLE-WARE'],
  favSites: ['codecademy.com', 'expressjs.com']
}

const publicData = {
  colors: ['green', 'orange'],
  numbers: [1, 2, 3, 4, 5]
}

//funcion para limitar el acceso a los idNumber autorizados en en el objet secretData
//solo se va a usar para url phone numbers y fav sites
const isAdmin = (req, res, next) => {
  const id = req.params.userId;
  if (!secretData.adminUsers.includes(id)) {
    res.status(401).send('no estas autorizado'); // Unauthorized
  } else {
    next();
  }
}

//get para saber si se esta ejecutando bien express()
app.get('/:userId',isAdmin,(req,res,next)=>{
    const usuario=req.params.userId
    res.send(`el usuario es ${usuario}`)
})

app.get('/:userId/colors', (req, res, next) => {
  res.send(publicData.colors);
});

app.get('/:userId/numbers', (req, res, next) => {
  res.send(publicData.numbers);
});
//se pone como segundo parametro la funcion que limita el acceso.
app.get('/:userId/phone-numbers',isAdmin, (req, res, next) => {
    isAdmin
    res.send(secretData.coolPhoneNumbers);
});

app.get('/:userId/fav-sites',isAdmin, (req, res, next) => {
  res.send(secretData.favSites);
});

app.listen(port,()=>{
    console.log(`estas en el puerto ${port}`)
})
