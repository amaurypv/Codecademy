const arreglo=['juan','maria','luis','perla'];

// for (let i=0;i<arreglo.length;i++){
// 	console.log(`la posicion es ${i} y el valor es ${arreglo[i]}`)
// }


/* para hacer un loop de forma regresiva. 
primero se define la variable con el valor máximo, en este caso se agarra la longitd del arreglo 
.lengtgh-1, despues se define hasta cuando se quiere ejecutar este loop. se definio hasta que llegue a 
cero i>=0 y en lugar de que se sumen de 1 en 1. que vaya disminuyendo de 1 en 1 como i-=1*/

// const arreglos=['luis','mario','carlos','martin','eug','rin']

// for (let i=arreglos.length-1;i>=0;i-=1){
// 	console.log(`posicion ${i} el valor es ${arreglos[i]}`)


// para hacer una funcion usando loop con arreglo 
// const iteracion=(array)=>{
// for (let i=array.length-1;i>=0;i-=1){
// 	console.log(`posicion ${i} el valor es ${array[i]}`)
// }	
// }

// console.log(iteracion(arreglo))

/*----------------------------------------
para comparar dos arreglos y ver cuales son los valores que se repiten ya sea numero o string
*/


// const mis=[1,2,3,4,5,8,9];
// const tus=[2,5,1,6,8,9]
// const rep=[]
// for (let i=0;i<mis.length;i++){
// 	for(let j=0;j<tus.length;j++){
// 		if(mis[i]===tus[j]){
// 			rep.push(mis[i])
// 		}
// 	}
// }
// console.log(rep)


// const bobsFollowers=['marty','john','mike','bob'];

// const tinasFollowers=['paul','bob','marty','john'];

// const mutualFollowers=[]

// for (let i=0;i<bobsFollowers.length;i++){
//   for(let j=0;j<tinasFollowers.length;j++){
//     if(bobsFollowers[i]===tinasFollowers[j]){
//       mutualFollowers.push(tinasFollowers[j])
//     }
//   }
// }

// console.log(mutualFollowers)


/* el while es muy parecido a for, solo que es muy primitivo y es muy facil de que se haga un 
loop infinito. se usa con la palabra while() dentro del parentesis se pone la condicion que se 
debe de cumplir hasta que se corte el loop. */

/* tambien se puede ejecutar un break si no se quiere ejecutar todo el loop en caso de que 
ya se haya alcanzado el objetivo para eso se tiene que poner un if cuando se cumpla 
el condicional se pare el loop*/

// let valores=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// for(let i=0;i<valores.length;i++){
// 	if(valores[i]>9){      //depende de donde se ponga si antes o despues del log
// 		break
// 	}
// 	console.log(`los numeros son ${valores[i]}`)
// }













