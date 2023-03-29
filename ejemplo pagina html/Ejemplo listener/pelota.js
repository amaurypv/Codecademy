let ball = document.getElementById('float-circle');
/*Now it’s time to create a game! Program this code to
dribble the ball on the platform using any key on a keyboard.
When a user presses a key down, it should lift the ball up.
When the user releases the key, the ball should drop.
First, make a function named up() that will raise the 
.bottom position of the ball to '250px'.*/
function up(){
    ball.style.bottom='250px'
}

function down(){
    ball.style.bottom='50px'
}

document.body.addEventListener('keydown',up)
document.body.addEventListener('keyup',down)