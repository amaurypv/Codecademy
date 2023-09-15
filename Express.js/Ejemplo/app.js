const { json } = require('express');
const express=require('express');
const app=express();
const port=3000

app.get('/api/users', async (req, res) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      res.json(data);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  });

app.get('/api/users/:id',async(req,res)=>{
    const usuario=req.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+usuario);
    const data = await response.json();
    res.json(data)
}
)
app.listen(port,()=>{
    console.log('estas en el puerto 3000')
})



