//proces.stdout.write() sive para escribir en la consola pero a diferencia de console.log()
let {testNumber} = require('./game.js');
//en la linea anterior se importa el modulo game.js, este modulo contiene la funcion testNumber()
process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

//mientras que process.stdin.on('data') sirve para  escuchar el input del usuario
//en este caso se tienen dos parametros, el primero es el input y el segundo es la funcion
process.stdin.on('data',playGame)

