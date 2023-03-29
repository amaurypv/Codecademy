// Rock, Paper, or Scissors
// Rock paper scissors is a classic two player game. Each player chooses either rock, paper,
//  or scissors. The items are compared, and whichever player chooses the more powerful item wins.
// The possible outcomes are:
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.


// The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
// Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.

// Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, 
// begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.


// When getting the user’s choice, you should also check to make sure that the user typed a valid choice:
//  ‘rock’, ‘paper’, or ‘scissors’.
// Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 
// 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log 
// to print an error message to the console.

const getUserChoice=userInput=>{
    userInput=userInput.toLowerCase();
    if(userInput==='rock'||userInput==='paper'||userInput==='scisors' || userInput==='bomb'){
        return userInput
    }else{
        console.log('enter paper, rock or scisors')
    }
}

// Now we need to have the computer make a choice.
// Create a new function named getComputerChoice with no parameters.
// Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2.
// Then, depending on the number, return either 'rock', 'paper', or 'scissors'.

const getComputerChoice=()=>{
    let ram=Math.floor(Math.random()*(3-1+1)+1)
    if(ram===1){
        return 'paper'
    }else if(ram===2){
        return 'rock'
    }else if(ram===3){
        return 'scisors'
    }
}

// Now it’s time to determine a winner.
// Create a function named determineWinner that takes two parameters named userChoice and computerChoice. 
// This function will compare the two choices played and then return if the human player won, lost, or tied.
// Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks 
// if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.
const determineWinner=(userChoice,computerChoice)=>{
    if (userChoice===computerChoice){
        return('its a tie')
    }else if(userChoice==='rock'){
        if(computerChoice==="paper"){
            return('computer wins')
        }else{
            return('you win')
        }
    }else if(userChoice==="scisors"){
        if(computerChoice==="rock"){
            return('computer wins')
        }else{
            return('you win')
        }
    }else if(userChoice==="paper"){
        if(computerChoice==="scisors"){
            return('computer wins')
        }else{
            return('you win')
        }
    }else if(userChoice==='bomb'){
        return('you win')
    }
}

// Everything is set up. Now you need to start the game and log the results.
// Create a function named playGame.
// Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), 
// passing in either 'rock', 'paper', or 'scissors' as an argument.
// Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
// Under both of these variables, use console.log to print them to the console.
// Finally, let’s determine who won.
// Inside the playGame() function, call the determineWinner() function. 
// Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.
// Then, to start the game, call the playGame() function on the last line of your program.

const playGame=(user)=>{
    let userChoice=getUserChoice(user);
    let computerChoice=getComputerChoice();
    console.log(userChoice,computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame('bomb')