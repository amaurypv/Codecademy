/* un arreglo (array) es una lista ordenada de datos, que se indica por medio de corchetes
y cada dato se separa por una coma (,) las posiciones dentro del arreglo se empiezan a contar
a partir de 0. */

// const arreglo=[1,2,3,4]

/*para llamar un dato de un arreglo se invoca el nombre del arreglo y entre corchete 
el numero de la posición en que se encuentra el dato. */

// console.log(arreglo[1]) //imprimira 2


/*para agregar un dato a un arreglo existente se invoca el nombre del arreglo y .push() dentro 
de los parentesis va el dato que se quiera añadir */


// arreglo.push(5);

// console.log(arreglo)  //imprime [1, 2, 3, 4, 5]

/* para aregar un dato en una posición específica del arreglo se define el arreglo y entre 
corchetes el numero de la posición en donde se va a poner el dato = al valor que se quiere 
añadir */

// arreglo[7]=8
// console.log(arreglo)  // imprime [1, 2, 3, 4, 5, vacío ×2, 8] ya que los espacios 5 y 6 n
// 					  // estan vacios


/*para quitar el ultimo dato de un arreglo es el nombre del arreglo y .pop()*/

// arreglo.pop()
// console.log(arreglo) // imprime [1, 2, 3, 4, 5, vacío ×2] (ya se generaron los 2 espacios)

// arreglo.pop()
// console.log(arreglo) // imprime [1, 2, 3, 4, 5, vacío ×2] (ya se generaron los 2 espacios)

// arreglo.pop()
// console.log(arreglo) // imprime [1, 2, 3, 4, 5, vacío ×2] (ya se generaron los 2 espacios)

// para contar los elementos que tiene un arreglo se usa .length 

// let arreglo=['juan','mario','luis','pedro']

// console.log(arreglo.length)

// arreglo.push('maria','ana')

// console.log(arreglo)
// // para agarrar del arreglo desde un punto específico se utiliza slice. 

// console.log(arreglo.slice(3))

/* se puede volver un arreglo en una oración, usando la funcion .join() y dentro de los parentesis 
poner (' ') de esta forma se eliminan las comas y se ponen espacios.*/

// const saludo=['hola','como','estas']

// console.log(saludo.join(' '))  //imprime: hola como estas








