import fuentes from "./DOM-functions"

const {cambioColor,clickMostrar}=fuentes

const aparece=document.getElementById('mostrar')
const oculto=document.getElementById('oculto')

aparece.addEventListener('click',()=>{
    clickMostrar(oculto),
    cambioColor(oculto)
})



/* los modulos se usan cuando se tiene un archivo que se puede usar diferentes veces
en un mismo archivo 
se tienen que generar dos archivos js. uno que es el contiene las funciones de los
cambios y otro donde se lleven a cabo las acciones.
en el archivo donde se generan las funciones para exportarlos, al final del archivo
-se tiene que poner export{funcion1,funcion2} entre corchetes y separados por coma
en el archivo que genera los cambios se importará de la siguiente manera:
-import { funcion1, funcion2 } from "./DOM-functions"
se debe de poner el nombre de la carpeta de la que se está importando. 
y en el archivo html se cambio por type='module'
ejemplo: <script type="module" src="./ejemplo-modulo.js"></script>
en caso de que se tengan modulos con el mismo nombre de funcion se pueden cambiar
el nombre al ejecutarlo. 
// inside greeterEspanol.js 
const greet = () => {
    console.log('hola');
  }
  export { greet };
   
// inside greeterFrancais.js 
const greet = () => {
    console.log('bonjour');
  }
  export { greet };
al importarlo se pueden importar como 
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';


tambien se pueden poner varias funciones en una sola funcion de la siguiente forma. 

const fuentes={clickMostrar,cambioColor} //se ponen las funciones en un objeti
export default fuentes se pone default

para llamarlo en el archivo para ejecutar los DOM se pone
import fuentes from "./DOM-functions"

const {cambioColor,clickMostrar}=fuentes //se definene las funcions dentro de fuentes


*/