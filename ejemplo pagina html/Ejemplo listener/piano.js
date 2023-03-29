// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})
//para poner uno varios eventos a un arreglo de elementos.
//se hace un recorrido por el arreglo con map 

notes.map(tecla=>{
    tecla.addEventListener('mousedown',()=>{
        tecla.style.backgroundColor='blue'
    })
    tecla.addEventListener('mouseup',()=>{
        tecla.style.backgroundColor=''
    })
})

// Write a loop that runs the array elements through the function


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
//Now you must create events on all the progress buttons. 
//First, create an event handler property with a click event
//on the nextOne element.
// To begin modifying the song box, you must switch 
// the progress buttons first.
// Using an anonymous event handler function, make the 
// following changes to the button that appears after nextOne
// is clicked:
// Reveal the nextTwo button by changing the .hidden 
// property to make the nextTwo button appear.
// Hide the nextOne button by changing the .hidden property 
// to hide the nextOne button.
// Next, a click event firing on the nextOne must change the 
// music notes that guide the piano student through the song.
// Add the following changes to the nextOne event handler function 
// so the musical notes change when the button is clicked.
// Change the content of the element with an ID of letter-note-five to D.
// Change the content of the element with an ID of letter-note-six to C.

nextOne.addEventListener('click',()=>{
    nextTwo.hidden=false;
    nextOne.hidden=true;
    document.getElementById('letter-note-five').innerHTML='D';
    document.getElementById('letter-note-six').innerHTML='C'
})

// Create another event handler property with a click event on 
// the button element called nextTwo. Then assign the property 
// to the value of an anonymous event handler function.
// Make the following changes to the button that appears when 
// nextTwo is clicked:
// Reveal the nextThree button by changing the 
// .hidden property to make the nextThree button appear.
// Hide the nextTwo button by changing the .hidden property to 
// hide the nextTwo button.
// Once the student has reached this point of the Happy Birthday 
// song the lyrics changes from HAP-PY BIRTH-DAY TO YOU to 
// HAP-PY BIRTH-DAY DEAR FRI-END.
// Make the following changes to the lyrics in the function 
// when the button is clicked:
// Change the content of the element with an ID of word-five 
// to DEAR.
// Change the content of the element with an ID of word-six 
// to FRI-.
// Now you have the lyrics HAP-PY BIRTH-DAY DEAR FRI-. 
// To finish the line, you must add the -END to the song 
// box under the piano.
// The -END element is stored in the lastLyric variable.
// Add a statement to the event handler function for nextTwo 
// that changes the display property of lastLyric to 
// 'inline-block'
// A click event firing on the second button must also 
// change the music notes to guide the piano student 
// through the song.
// Add the following changes to the nextTwo event handler
// function so the musical notes change when the button is clicked:
// Change the content of the element with an ID of letter-note-three to G.
// Change the content of the element with an ID of letter-note-four to E.
// Change the content of the element with an ID of letter-note-five to C.
// Change the content of the element with an ID of letter-note-six to B.

// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click',()=>{
    nextThree.hidden=false;
    nextTwo.hidden=true
    document.getElementById('word-five').innerHTML='DEAR'
    document.getElementById('word-six').innerHTML='FRI-'
    lastLyric.style.display='inline-block';
    document.getElementById('letter-note-three').innerHTML='G';
    document.getElementById('letter-note-four').innerHTML='E';
    document.getElementById('letter-note-five').innerHTML='C';
    document.getElementById('letter-note-six').innerHTML='B';

})

//Create an event handler property with a click event on 
//the nextThree element
// Write anonymous event handler property and 
//function for the third progress button
// Using an anonymous event handler function, 
// make the following changes to the button that appears when 
// nextThree is clicked:
// Reveal the startOver button by changing the .hidden 
// property to make the startOver button appear.
// Hide the nextThree button by changing the .hidden property 
// to hide the nextThree button.
// Change the content of the element with an ID of word-one to HAP-.
// Change the content of the element with an ID of word-two to PY.
// Change the content of the element with an ID of word-three to BIRTH.
// Change the content of the element with an ID of word-four to DAY
// Change the content of the element with an ID of word-five to TO.
// Change the content of the element with an ID of word-six to YOU!.
// Change the content of the element with an ID of letter-note-one to F.
// Change the content of the element with an ID of letter-note-two to F.
// Change the content of the element with an ID of letter-note-three to E.
// Change the content of the element with an ID of letter-note-four to C.
// Change the content of the element with an ID of letter-note-five to D.
// Change the content of the element with an ID of letter-note-six to C.
nextThree.addEventListener('click',()=>{
    startOver.hidden=false
    nextThree.hidden=true
    document.getElementById('word-one').innerHTML='HAP-'
    document.getElementById('word-two').innerHTML='PY'
    document.getElementById('word-three').innerHTML='BIRTH'
    document.getElementById('word-four').innerHTML='DAY'
    document.getElementById('word-five').innerHTML='TO.'
    document.getElementById('word-six').innerHTML='YOU!.'
    document.getElementById('letter-note-one').innerHTML='F'
    document.getElementById('letter-note-two').innerHTML='F'
    document.getElementById('letter-note-three').innerHTML='E'
    document.getElementById('letter-note-four').innerHTML='C'
    document.getElementById('letter-note-five').innerHTML='D'
    document.getElementById('letter-note-six').innerHTML='C'
    lastLyric.style.display=''

})

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}