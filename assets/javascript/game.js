//Using the randomNum class, set the value of each crystal to a random number between 1 and 12 at the start of each round

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

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
