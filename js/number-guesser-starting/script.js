let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>Math.floor(Math.random()*10)


// Create a compareGuesses() function. This function:
// Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
// Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, 
//the human user should win.
// Return true if the human player wins, and false if the computer player wins.
// The purpose of this function is to be called each round to determine which guess is closest to the target number.

const compareGuesses=(user,comp,target)=>{
    let us=Math.abs(target-user);
    let mach=Math.abs(target-comp)
    if (us<=mach){
        return true
    }else{
        return false
    }
}


// Create an updateScore() function. This function:
// Has a single parameter. This parameter will be a string value representing the winner.
// Increases the score variable (humanScore or computerScore) 
// by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
// Does not need to return any value.
// The purpose of this function is to be used to correctly increase the winner’s score after each round.

const updateScore=(winner)=>{
    if(winner==='human'){
        humanScore+=1
    }else if(winner==='computer'){
        computerScore+=1
    }
}

// Create an advanceRound() function.
// This function should increase the value of currentRoundNumber by 1.
// The purpose of this function is to be used to update the round number after each round.
// After completing advanceRound(), your Number Guesser game should be fully operational.
// You should be able to make guesses, see your or the computer score increase correctly,
// move to the next round, and see the correct round displayed.

const advanceRound=()=>{
    currentRoundNumber+=1
}
