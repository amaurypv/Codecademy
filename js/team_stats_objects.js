// Let’s make a data structure to store the information about our team. 
// Declare a const variable called team and set it to an empty object.
// Our team has players and the games that they have played. 
// Let’s represent both of these by adding two properties to your team object. 
// Add a _players property and a _games property and initialize both to empty arrays.
// Next, populate the empty_players array with three players. 
// Each player should be an object containing three properties: 
// firstName, lastName, and age. Put each player on a new line to prevent the line from getting too long
// Let’s do the same for our _games array. 
// Populate the empty array with three games.
// Each game should be an object containing three properties: opponent, teamPoints, opponentPoints.
// Create a getter method called players to retrieve the _players property. 
// Inside the getter method, return the _players property.
// For the scope of this project, we won’t need to create setter methods, 
// because we don’t want anyone to change the data saved to the properties.
// Create another getter method called games to retrieve the _games property. 
// Inside the getter method, return the _games property.
// We want to add a new player to our team. Add a .addPlayer() method to the team object. 
// This method should take in three parameters: newFirstName, newLastName, and newAge.
// Inside the method, create a player object by setting the three parameters
// to be the values for the object’s three properties: firstName, lastName, age. Finally,
// add the player object to the team‘s _players array.
// The scorekeeper has some new information for us! 
// Create a method for adding game results called addGame that takes three parameters:
// newOpponent, newTeamPoints, newOpponentPoints.
// Inside the .addGame() method, create a game object by setting the three parameters to be the values 
// for the object’s three properties: opponent, teamPoints, opponentPoints.
// Add the game object to the team‘s _games array.
const team={
    _players:[
        {firstName:'patrick',lastName:'mahomes',age:25},
        {firstName:'travis',lastName:'kelcey',age:27},
        {firstName:'juju',lastName:'smith',age:24}],
    _games:[
        {opponent:'philadelphia',teamPoints:38,opponentPoints:35},
        {opponent:'cincinatti',teamPoints:38,opponentPoints:35},
        {opponent:'jacksonville',teamPoints:42,opponentPoints:22}
    ],
    get players(){
        return this._players
    },
    get games(){
        return(this._games)
    },
    addplayer(newFirstName,newLastName,newAge){
        team._players.push({firstName:newFirstName,lastName:newLastName,age:newAge})
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        team._games.push({opponent:newOpponent,teamPoints:newTeamPoints,opponentPoints:newOpponentPoints})
    }
}
//console.log( team.players)
// Below the team object, let’s try out our new .addPlayer() method to add a new player: Bugs Bunny, age 76.
// Log the team‘s _players property to check that our new player was added.

team.addplayer('bugs','bunny',76)
console.log( team.players)
team.addGame('titans',100,90)
console.log( team.games)
