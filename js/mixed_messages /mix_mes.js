//first define an array with 10 sentences about weater
let sentences=['The sun is shining brightly and the sky is clear, making for a beautiful day.',
'Its been raining all morning, and the streets are starting to flood',
'The wind is picking up, and it looks like a storm might be on the way.',
'The temperature is dropping rapidly, and its starting to feel quite chilly outside.',
'The air is thick with humidity, making it feel hotter than it actually is',
'The clouds are starting to clear, and it looks like the sun might come out soon.',
'Theres a light breeze blowing, making it feel refreshing to be outside',
'The weather is quite mild today, with a comfortable temperature and moderate humidity.',
'Theres a thick layer of fog blanketing the city, making it difficult to see more than a few feet ahead.',
'Its a perfect day for a picnic, with plenty of sunshine and a gentle breeze to keep things cool']
//define a number random between the length of the array 
let nuram=Math.floor(Math.random()*((sentences.length)+1))
//made a function that prints a sentence random
const rand=()=>{
    console.log(sentences[nuram])
}
//call the function
rand()