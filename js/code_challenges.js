// // Write a function, reverseArray(), that takes in an array as an argument and returns 
// // a new array with the elements in the reverse order.

// const reverseArray=arr=>{
//     let nueva=[]
//     for(let i=arr.length;i>=0,i--;){
//         nueva.push(arr[i])
//     }
//     return nueva
// }

// const sentence = ['sense.','make', 'all', 'will', 'This'];
// console.log(reverseArray(sentence)) 

//--------------------------------------------------------------------------
// // Write a function, greetAliens(), that takes in an array of strings and uses a for 
// // loop to print a greeting with each string in the array.
// // The greeting should take the following format:
// // “Oh powerful [stringElement], we humans offer our unconditional surrender!”
// const greetAliens=(Arr)=>{
//     for(let i=0;i<Arr.length;i++){
//         console.log(`Oh powerful ${Arr[i]}, we humans offer our unconditional surrender!`)
//     }
// }

// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
// greetAliens(aliens);
//--------------------------------------------------------------------------
// // Write a function, convertToBaby(), that takes in an array as an argument and, 
// // using a loop, returns a new array with each string in the array prepended with 'baby '.
// const convertToBaby=arr=>{
//     let nuevo=[]
//     for(let x of arr){
//         nuevo.push(`baby ${x}`)
//     }
//     return nuevo
// }

// const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
// console.log(convertToBaby(animals))
//--------------------------------------------------------------------------

// // Write a function declineEverything() that takes in an array of strings and, using .forEach(), 
// // loops through each element in the array and calls politelyDecline() with each of them.
// // The .forEach() function should apply politelyDecline() directly; 
// // it should NOT merely receive an argument function that uses politelyDecline().
// const politelyDecline = (veg) => {
//     console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
// }

// const declineEverything=arr=>{
//     arr.forEach(x => {
//         politelyDecline(x)
//     });
// }
//--------------------------------------------------------------------------

// // Write a function, squareNums(), that takes in an array of numbers and, using .map(),
// // returns an array with the square of each of the elements of that array.
// // You can test your function when you’re ready by passing in the numbers array or by making your own array!

// const numbers = [2, 7, 9, 171, 52, 33, 14]

// const squareNums=arr=>{
//     return arr.map(x=>x*x)
// }

// console.log(squareNums(numbers))

//--------------------------------------------------------------------------

// // Write a function shoutGreetings() that takes in an array of strings and returns a new array. 
// // This new array should contain all the strings from the argument array but with capitalized letters
// // and an exclamation point appended to the end: 'heya' will become 'HEYA!'
// // You can use any technique you want to accomplish this task.
// // You can test your function when you’re ready by passing in the greetings array or by making your own array!

// const shoutGreetings=arr=>{
//     return arr.map(x=>x.toUpperCase()+"!")
// }
// const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
// console.log(shoutGreetings(greetings))

//--------------------------------------------------------------------------

// // Write a function sortYears() that takes in an array of years, and, 
// // using the built-in .sort() method, returns that array with the years sorted in descending order.
// // You can test your function when you’re ready by passing in the years array or by making your own array of years!
// const sortYears=arr=>{
//     return arr.sort((a,b)=>b-a)
// }
// const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

// console.log(sortYears(years))
// // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

//--------------------------------------------------------------------------

// // Write a function justCoolStuff() that takes in two arrays of strings, 
// // and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// const justCoolStuff=(x,y)=>{
//     let nueva=[]
//     for(let a of x){
//         for(let b of y){
//             if (a==b){
//                 nueva.push(a)
//             }
//         }
//     }
//     return nueva
// }

// const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

// const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

// console.log(justCoolStuff(coolStuff,myStuff))
//--------------------------------------------------------------------------

// // Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
// // {name: 'cabbage', source: 'plant' }
// // and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

// const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
// // isTheDinnerVegan(meal); // Should return true
// // You can test your function when you’re ready by passing in the dinner array or by making your own!
// const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

// const nueva=meal.every(x=>x.source=='plant')
// //console.log(nueva)

// const isTheDinnerVegan=(ar)=>{
//     let nueva=''
//     nueva=ar.every(x=>x.source=='vegan')
//     return nueva
// }

// console.log(isTheDinnerVegan(dinner))

//--------------------------------------------------------------------------
// // Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
// // {speciesName: 'shark', numTeeth: 50 }
// // and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
// // You’ll need to access each object’s .numTeeth property.
// // Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

// const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// const cada=arr=>{
//     nueva=[]
//     nueva=arr.sort((a,b)=>a.numTeeth-b.numTeeth)
//     return nueva 
// }
// console.log(cada(speciesArray))

//--------------------------------------------------------------------------
// // Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'.
// // If the keys are in the array, your function should return the index at which they can be found. 
// // If they’re not in the array, your function should return -1

// const findMyKeys=(arr)=>{
//     return arr.indexOf('keys')
// }
// const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

// console.log(findMyKeys(randomStuff))

//--------------------------------------------------------------------------

// // Write a function, dogFactory(). It should:
// // have 3 parameters: name, breed, and weight (in that order)
// // expect name and breed to be strings
// // expect weight to be a number
// // return an object
// // have each of those parameters as keys on the returned object 
// // //returned with the values of the arguments that were passed in
// // Add getters and setters for each of the three properties and change the property names to have an underscore prepended.


// const dogFactory=(name, breed, weight)=>{
//     return{
//     _name:name,
//     _breed,
//     _weight,
//     get name(){
//         return this._name
//     },
//     set name(nombre){
//         this._name=nombre
//     },
//     get breed(){
//         return this._breed
//     },
//     set breed(raza){
//         this._breed=raza
//     },
//     get weight(){
//         return this._weight
//     },
//     set weight(peso){
//         this._weight=peso
//     }
//     }
// }
//-------------------------------------------------------------------------------------
// // Write a function factorial() that takes a number as an argument and returns the factorial of the number.
//  function factorial(num){
//     n=1
//     for (let i=1;i<num;i++){
//         n=n+(n*i)
//     }
//     return n
//  }

// console.log(factorial(6))
//-------------------------------------------------------------------------------------
// // Write a function subLength() that takes 2 parameters, a string and a single character. 
// // The function should search the string for the two occurrences of the character and return the
// // length between them including the 2 characters. If there are less than 2 or more than 2 occurrences 
// // of the character the function should return 0.

// function subLength(str,let){
//     let ar=str.split('')
//     let re=ar.reverse()
//     let primera=str.indexOf(let)
//     let segunda=re.indexOf(let)
//     let fin=str.slice(primera)
//     let palabra=str.slice(primera,-segunda)
//     n=0
//     for (let x of str) 
//         if(x==let){
//             n+=1
//         }
//     if(n>=3|| n<=1){
//         return 0
//     }
//     else if(segunda==0){
//         return (fin.length) 
//     }else{
//         return (palabra.length)
//     }
//     }

// console.log(subLength('cincinati','c'))

//-------------------------------------------------------------------------------------
// Write a function groceries() that takes an array of object literals of grocery items. 
// The function should return a string with each item separated by a comma
// except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

// Examples:
 let lista= [{item: 'Ice Cream'}]
// // returns 'Carrots, Hummus, Pesto and Rigatoni'

function groceries(arr){
    let x=[]
    let d=[]
    
    x=arr.map(n=>n.item)
    let lon=(x.length)-2
    let and=(x.length)-1
    for (let i=0;i<=lon;i++){
        d.push(x[i])
    }
    if(x.length<2){
        return x.join(' ')
    }else{
        return (d.join(', ')+ ' and '+ x[and])
    }
}

console.log(groceries(lista))
