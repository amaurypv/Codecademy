
  class Persona {
    constructor(nombre, apellido,edad,domicilio) {
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.domicilio=domicilio
    this.detalle=function () {
      return ("Nombre:"+this.nombre +
              "apellido:"+this.apellido
              )

    }
    }    
}

var juan=new Persona("juan","perez",22,"av de las ind")

console.log(juan.detalle())


