//para importar modulos desde otro archivo
const {frijol,fruta,bebida}=require('./modulos_veg.js');  //se importan los modulos desde el archivo modulos_veg.js


const ejemplo_allpromise=async()=>{
    const todas_juntas=await Promise.all([frijol(),fruta(),bebida()]); //cuando se llama un Promise.all se ponen todas las promesas en forma de lista
    console.log(`se ejecuto la funcion Promise.all y se obtuvieron los siguientes resultados: ${todas_juntas[0]}, ${todas_juntas[1]}, ${todas_juntas[2]}`);
}

ejemplo_allpromise()
