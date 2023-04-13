// Access HTML elements definir los elementos por id 
let doorImage1=document.getElementById('door1')
let doorImage2=document.getElementById('door2')
let doorImage3=document.getElementById('door3')
let startButton=document.getElementById('start')

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;


// Define game logic to check doors, progress game, end game, and choose a random chore door
const isClicked=(door)=>{
    if(door.src===closedDoorPath){
        return true
    }else{
        false
    }
}
const isBot=(door)=>{
    if(door.src===botDoorPath){
        return true
    }else{
        false
    }
}

const gameOver=(status)=>{
    if(status==='win'){
        startButton.innerHTML='You win! Play again?'
    }else{
        startButton.innerHTML='Game over! Play again?'
    }
    currentlyPlaying=false
}

const playDoor=(door)=>{
    numClosedDoors--
    if(numClosedDoors===0){
        return gameOver('win')
    }else if(isBot(door)){
        return gameOver()
    }
}

const randomChoreDoorGenerator=()=>{
    let choreDoor=Math.floor(Math.random()*numClosedDoors)
    if(choreDoor===0){
        openDoor1=botDoorPath
        openDoor2=beachDoorPath
        openDoor3=spaceDoorPath
    }else if(choreDoor===1){
        openDoor2=botDoorPath
        openDoor1=beachDoorPath
        openDoor3=spaceDoorPath
    }else if(choreDoor===2){
        openDoor3=botDoorPath
        openDoor1=beachDoorPath
        openDoor2=spaceDoorPath
    }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}


const startRound=()=>{
    doorImage1.src=closedDoorPath
    doorImage2.src=closedDoorPath
    doorImage3.src=closedDoorPath
    numClosedDoors=3;
    currentlyPlaying=true;
    startButton='Good Luck!';
    return randomChoreDoorGenerator()
}
// Start a game round
startRound()
