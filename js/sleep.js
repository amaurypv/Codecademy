
// The first problem to solve is determining how many hours of sleep you got each night of the week.
// You can create a function that returns any given night’s number of hours of rest. 
// Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.
//Create a function named getSleepHours with a single parameter named day.
// The function should accept a day as an argument and return the number of hours you slept that night.
// For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
// Use an if/else or switch statement to implement this.
const getSleepHours=day=>{
    day=day.toLowerCase()
    switch(day){
        case('monday'):
        return 8;
        break;
        case('tuesday'):
        return 8;
        break;
        case('wednesday'):
        return 8
        break;
        case('thursday'):
        return(8)
        break;
        case('friday'):
        return(8);
        break;
        case('saturday'):
        return(7);
        break;
        case('sunday'):
        return(8);
        break;
        default:
            return('write a weekday')
        break;
    }
}


// Now that you’ve written a function to get the sleep hours for each night, we need to do three things:
// Get the total sleep hours that you actually slept
// Get the ideal sleep hours that you prefer
// Calculate the sleep debt, if any.
// To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.
// Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. 
// Add the results together and return the sum using an implicit return.
const getActualSleepHours=()=>{
    return(getSleepHours('monday')+getSleepHours('tuesday')+ getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday'))
}

// To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
// Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. 
// Then return the idealHours multiplied by 7.
// You’ll want to multiply by 7 to get the total hours you prefer per week.
const getIdealSleepHours=()=>{
    let idealHours=6
    return(idealHours*7);
}
// Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.
// Create a function named calculateSleepDebt with no parameters.
// Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
// Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

// Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. 
// The function should fulfill this logic:
// If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
const calculateSleepDebt=()=>{
    let actualSleepHours=getActualSleepHours();
    let idealSleepHours=getIdealSleepHours();
    let totalrest=(actualSleepHours-idealSleepHours)*-1
    if(actualSleepHours===idealSleepHours){
        console.log('you got the perfect amount of sleep')
    }else if(actualSleepHours>idealSleepHours){
        console.log(`you got ${totalrest} more hours sleep than needed`)
    }else if(actualSleepHours<idealSleepHours){
        console.log(`you should get some rest,you need to sleep ${totalrest} more hours`)
    }
}
(calculateSleepDebt())