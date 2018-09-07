//Set the value of each crystal to a random number between 0 and 12 at the start of each round

var yellowCrystal = Math.floor(Math.random() * Math.floor(12));

var greenCrystal = Math.floor(Math.random() * Math.floor(12));

var redCrystal = Math.floor(Math.random() * Math.floor(12));

var blueCrystal = Math.floor(Math.random() * Math.floor(12));

console.log(yellowCrystal);
console.log(greenCrystal);
console.log(redCrystal);
console.log(blueCrystal);

//Set the value of the randomNum between 0 and 120 at the start of each round

var randomNum = Math.floor(Math.random() * Math.floor(120));

console.log(randomNum);

//Set the initial totalScoreCount equal to 0

var totalScoreCount= 0;

//If user clicks on any of the four crystal buttons, then select the value of that crystal & add it to 'Your Total Score'
$("#Yellowcrystal").on("click", function() {
  totalScoreCount + yellowCrystal;
  return
});

//If user wins, wins++ and reset game; otherwise, losses++ and reset game

if (totalScoreCount == randomNum) {
  wins++;
  //reset game;
}

if (totalScoreCount > randomNum) {
  losses++;
  //reset game;
}

//Come up with a way to reset the game. What does 'reset game' mean? 5 new randomly generated numbers...
