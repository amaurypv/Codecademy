// Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.
// Check off this task after reading that line.

let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable that indicates whether a runner registered early or not.
// Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.
 let early=false

// Create a variable for the runner’s age and set it equal to a number.
// You’ll change this later as you test different runner conditions
let age=18

// Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 to their raceNumber if this is true.

if(early && age>18){
    raceNumber+=1000
}
// Create a separate control flow statement below the first (starting with if again).
// This statement will check age and registration time to determine race time.
// For runners over 18 who registered early, log a statement to the console telling them 
// that they will race at 9:30 am. Include their raceNumber.
if (early && age>18){
    console.log(`you will race at 9:30 and you race number is ${raceNumber}`)
}else if(early===false && age>18){
    console.log(`you will race at 11:00 and you race number is ${raceNumber}`)
}

//“Youth registrants run at 12:30 pm (regardless of registration)”
//For people who are under 18, log a statement to the console telling 
//them that they will race at 12:30 pm. Include their raceNumber.
if (age<18){
    console.log(`you will race at 12:00 and your race number is ${raceNumber}`)
}else if(age===18){
    console.log('see the registration desk')
}

// Enter different combinations of values for the two variables you created and run your code several times.
//  Verify that the correct statements are printing to the console!
// You can check your work using the examples provided in the hint.
