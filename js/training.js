// Training Days
// As a seasoned athlete, one of your favorite activities is running marathons. 
// You use a service called Training Days that sends you a message for the event 
// you signed up for and the days you have left to train.
// Since you also code, Training Days has asked you to help them solve a problem: 
// The program currently uses the wrong scope for its variables. 
// They know this can be troublesome as their service evolves. In this project you will make Training 
// Days more maintainable and less error-prone by fixing variable scopes.

// Let’s begin by running the trainingDays.js file. In the console we can see that the program is broken!
// Ideally, the getRandEvent() function selects an event at random. 
// The getTrainingDays() function returns the number of days to train based on the event selected. 
// The logEvent() and logTime() functions print the athlete name, event, and number of days to the console.
// But poorly scoped variables are causing errors.

// To avoid the ReferenceError, declare days within the getTrainingDays function, before the if statement.
// Run the program again: no error, but days is undefined! New days variables are being defined in the scope 
//of each if/else if statement.
// Delete the three let‘s within the if/else if statements.
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    let days=0
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};


// The log functions–logEvent() and logTime()–use the same name variable.
// There seems to be a problem with the scoping; we can tell by the amount of 
// duplicate code here! In addition to variables scoped too broadly, duplicate 
// code can indicate that a variable may be scoped too tightly.
// Let’s avoid this repetition by adding name as the first parameter for each function
// The scope of `name` is too tight 


//Move the name variable to global scope
let nombre='andre'
const logEvent =(name, event) => {
   console.log(`${name}'s event is: ${event}`);
};

const logTime = (name,days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const evento = getRandEvent();
const days = getTrainingDays(evento);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(nombre,evento);
logTime(nombre,days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
