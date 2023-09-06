/*CRUD sus iniciales significan CREATE READ UPDATE DELETE. 
son las caracteristicas con las que debe contar una API para que se considere completa. 
hacer el ejemplo de una bibliotea que cuente con una base de datos de libros y cuente con 
el CRUD */

//primero se define la funcion para crear un nuevo elemento en la libreria. 

class Libro{
    constructor(id, nombre,autor,año){
        this.id=id
        this.nombre=nombre
        this.autor=autor
        this.año=año
    }
    mostrar(){
        console.log(this)
    }
}

//se define el objeto en el que se va a llenar el catalogo de la libreria
let libreria={}

//agregar un libro a la lista 
const agregar=(libro)=>{
    libreria[libro.id]=libro
}

//eliminar un libro del catalogo 
const eliminar=(id)=>{
    ids=[]
    for(let i in libreria){
        ids.push(+i)        
    }
    if(ids.includes(+id)){
        delete libreria[id]
}
}
//editar un elemento solo si esta en la lista 
const editar=(id,nombre,autor,año)=>{
    ids=[]
    for(let i in libreria){
        ids.push(+i)        
    }
    if(ids.includes(+id)){
        let editado=new Libro(id,nombre,autor,año)
        agregar(editado)
    }else{
        console.log('no esta')
    }
}

let soledad=new Libro(1,"100 años","Gabri",2000)
let elPadrino=new Libro(2,"El Padrino","Miguel",1972)
let habitos=new Libro(3,"Habitos","Jose",1977)
let disney=new Libro(4,'disney','iger',2020)
agregar(soledad)
agregar(elPadrino)
agregar(habitos)
agregar(disney)

console.log(libreria)

editar(4,'1984','orwell',1940)

console.log(libreria)
