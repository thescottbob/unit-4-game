//Using the randomNum class, set the value of each crystal to a random number between 1 and 12 at the start of each round

var yellowCrystal= Math.floor(Math.random() * Math.floor(12));

var greenCrystal= Math.floor(Math.random() * Math.floor(12));

var redCrystal= Math.floor(Math.random() * Math.floor(12));

var blueCrystal= Math.floor(Math.random() * Math.floor(12));

console.log(yellowCrystal)
console.log(greenCrystal)
console.log(redCrystal)
console.log(blueCrystal)

var randomNum= Math.floor(Math.random() * Math.floor(120));

console.log(randomNum)

//If user wins, wins++ and reset game; otherwise, losses++ and reset game

if(totalScoreCount==randomValue) {
    wins++;
    //reset game;
}

if(totalScoreCount>randomValue) {
    losses++;
    //reset game;
}

//Come up with a way to reset the game. What does 'reset game' mean? 5 new randomly generated numbers...
