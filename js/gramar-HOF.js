// 1.In main.js, the story variable holds the paragraph we’ll be editing. 
// In order to edit the story, we turn it into an array on line 3. 
// The .split() method separates the story string by the space character (' ') and stores each word as an element of the array.
// To see the array we’ll be working with throughout the lesson, log storyWords to the console.
// After you’ve viewed the storyWords array, comment out the console.log() statement before moving to the next task.

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// For a better visual comparison of the original and edited stories, we want to view the edited storyWords array as a string. 
// To change the storyWords array back into a readable string, we can invoke the .join() method on storyWords.
// Give the .join() method an argument of an empty space character (' ') to separate each array element with a space in the string.
// Place the .join() method invocation as an argument of a console.log() statement to log the final story to the console.


// Now it’s time to start editing the story by manipulating the storyWords array. 
// We want to be able to see the changes, so be sure your console.log() of the joined story is the last line of code in your editor.
// First, above the console.log() statement that uses the .join() method, create a variable named count that stores the number 0.
// Directly below count, use a .forEach() method to iterate over the storyWords array.
// As an argument of the forEach() method, create an empty function to be used as the callback function.
// While ES6 arrow syntax is recommended for the callback function, feel free to use any syntax you’re comfortable with.

let count=0
storyWords.forEach(word=>count+=1)
console.log(count) //prints 181

// A word count of 181 is a bit long for this story. 
// Let’s filter out all instances of the word “literally” to shorten the story and remove the unnecessary word. 
// We will reassign the filtered story to the same storyWords variable by applying the .filter() method! 
// Throughout the project, we’ll use this approach of reassigning the storyWords variable for each revision of the story.
// Below where you logged the count variable, reassign the storyWords variable to equal the invocation of the .filter() 
// method on the storyWords array. Give the .filter() method a callback function with a parameter of word.
storyWords=storyWords.filter(x=>x!=unnecessaryWord);

// Below the storyWords variable declaration, notice the variable unnecessaryWord on line 4. 
// We want to filter out the value of unnecessaryWord from the story.
// Within the filter() method’s callback function body, return word only if it is NOT equal to unnecessaryWord.
// Check the story string in the console to make sure it doesn’t include the word “literally”. 
// The first instance of “literally” was previously in the first sentence.

// Now that we’ve removed the unnecessary words, let’s take care of any misspelled words in the story.
// We can reassign storyWords to a new array of spell-checked words using the .map() method!
// Reassign storyWords to equal the invocation of the .map() method on the storyWords array.
// Setword as a parameter of .map()‘s callback function.
// In the callback’s body, define a conditional statement to check if the word argument is equal to the misspelledWord variable. 
// If it is, return the correct spelling of the string, “beautiful”. If not, return word.
// Take a look at the story string in the console to see the correct spellings! 
// You can see one instance of the spellchecked word in the first sentence of the story.

storyWords=storyWords.map(word=>{
    if(word==misspelledWord){
        return 'beautiful'
    }else{
        return word
    }
})


// Uh oh, your great grandmother is going to read the story and there’s a “bad” word in it! 
// Let’s apply the .findIndex() method to storyWords to find the index of the bad word.
// Start by declaring a variable called badWordIndex and setting it to the invocation of .findIndex() on the storyWords array.
// The .findIndex() callback function should check each word to see if it equals the badWord variable declared on line 6, 
// and return the index of the found word. Then, log badWordIndex to the console.

let badWordIndex=storyWords.indexOf(badWord)
console.log(badWordIndex)

// Now that we have the index of the bad word, we can easily replace it with something more appropriate.
// Access the element inside the storyWords array that has the index of badWordIndex using bracket notation. 
// Set the accessed element equal to the more appropriate string, 'really'.
// Save the code and check that the bad word has been replaced.

storyWords[78]='really'



// Finally, let’s simplify the words in the story to appeal to a broader audience. 
// We can make sure every word in the story is 10 characters or less using the .every() method. 
// The .every() method uses a callback function to test if every element in an array passes a specified condition. 
// It returns true if all elements pass, and false if there is an element that does not pass.
// To start, define a variable called lengthCheck and set it to the invocation of the .every() method on storyWords. 
// In the callback function, test whether every word has less than or equal to 10 characters.
// Log lengthCheck to the console to see the result. If true is logged, every word in the story has 10 characters or less.
// Otherwise, one or more words are longer than 10 characters.
let lengthCheck=storyWords.every(word=>{word.length<=10})
console.log(lengthCheck)

let check=storyWords.map(x=>{
    if(x.length>10){
        return x
    }
})
console.log(check.join(' ')) // imprime breathtaking
let cambio=storyWords.indexOf('breathtaking')

storyWords[111]='stunning'

console.log(storyWords.join(' '))

console.log(lengthCheck)
