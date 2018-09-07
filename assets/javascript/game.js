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
var updatedScoreCount;

//If user clicks on any of the four crystal buttons, then select the value of that crystal & add it to totalScoreCount
$("#Yellowcrystal").on("click", function() {
  totalScoreCount = totalScoreCount + yellowCrystal;
  console.log(totalScoreCount);
  $("#totalScoreCount").html(totalScoreCount);
  $(updatedScoreCount).push(totalScoreCount);
});

$("#Greencrystal").on("click", function() {
    totalScoreCount = totalScoreCount + greenCrystal;
    console.log(totalScoreCount);
    $("#totalScoreCount").html(totalScoreCount);
  });

  $("#Redcrystal").on("click", function() {
    totalScoreCount = totalScoreCount + redCrystal;
    console.log(totalScoreCount);
    $("#totalScoreCount").html(totalScoreCount);
  });

  $("#Bluecrystal").on("click", function() {
    totalScoreCount = totalScoreCount + blueCrystal;
    console.log(totalScoreCount);
    $("#totalScoreCount").html(totalScoreCount);
  });

//Declaring two variable to track (and set the initial values of) the wins and losses of the user

var wins= 0;
var losses= 0;


//If user wins, wins++ and reset game

if (updatedScoreCount == randomNum) {
  wins++;
  $("#wins").html(wins);
  //reset game;
}

//If user loses, losses++ and reset game

if (updatedScoreCount > randomNum) {
  losses++;
  console.log(updatedScoreCount);
  console.log(losses);
  $("#losses").html(losses);
  //reset game;
}

//Come up with a way to reset the game. What does 'reset game' mean? 5 new randomly generated numbers...
