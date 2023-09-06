
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
}

// Your code here!
app.delete('/puddings/:flavor',(res,req)=>{
  const postre=req.params.flavor
  const posicion=findPuddingIndex(postre)
  if(posicion>0){
    deletePuddingAtIndex(posicion)    
  }
  res.status(404).send('no existe ese postre')

})


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


