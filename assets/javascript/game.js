//Set the value of each crystal to a random number between 0 and 12 at the start of each round.
var yellowCrystal = Math.floor(Math.random() * Math.floor(12));
console.log(yellowCrystal)
var greenCrystal = Math.floor(Math.random() * Math.floor(12));
var redCrystal = Math.floor(Math.random() * Math.floor(12));
var blueCrystal = Math.floor(Math.random() * Math.floor(12));

//Set the value of the randomNum between 0 and 120 at the start of each round.
var randomNum = Math.floor(Math.random() * Math.floor(120));
$("#randomValue").html(randomNum);

//Declaring two variables to track (and set the initial values of) the wins and losses of the user

var wins = 0;
var losses = 0;

//Declaring a variable to track the user's score count
var scoreCount = 0;

//If any of the crystal values equal 0, then select a new random value for that crystal. If the
//value of randomNum is less than 12, then select a new random value and display to the HTML.

if (yellowCrystal === 0) {
  yellowCrystal = Math.floor(Math.random() * Math.floor(12));
}

if (greenCrystal === 0) {
  greenCrystal = Math.floor(Math.random() * Math.floor(12));
}

if (redCrystal === 0) {
  redCrystal = Math.floor(Math.random() * Math.floor(12));
}

if (blueCrystal === 0) {
  blueCrystal = Math.floor(Math.random() * Math.floor(12));
}

if (randomNum < 12) {
  randomNum = Math.floor(Math.random() * Math.floor(120));
  $("#randomValue").html(randomNum);
}

//After the above code has ran, store it within a function to be called again (resetting the game) when the user wins or loses.

function beginGame() {
  var yellowCrystal = Math.floor(Math.random() * Math.floor(12));
  console.log(yellowCrystal)
  var greenCrystal = Math.floor(Math.random() * Math.floor(12));
  var redCrystal = Math.floor(Math.random() * Math.floor(12));
  var blueCrystal = Math.floor(Math.random() * Math.floor(12));

  var randomNum = Math.floor(Math.random() * Math.floor(120));
  $("#randomValue").html(randomNum);

  var scoreCount = 0;
  $("#totalScoreCount").html(scoreCount);
 
  if (yellowCrystal === 0) {
    yellowCrystal = Math.floor(Math.random() * Math.floor(12));
  }

  if (greenCrystal === 0) {
    greenCrystal = Math.floor(Math.random() * Math.floor(12));
  }

  if (redCrystal === 0) {
    redCrystal = Math.floor(Math.random() * Math.floor(12));
  }

  if (blueCrystal === 0) {
    blueCrystal = Math.floor(Math.random() * Math.floor(12));
  }

  if (randomNum < 12) {
    randomNum = Math.floor(Math.random() * Math.floor(120));
    $("#randomValue").html(randomNum);
  }
}

//When user clicks on the yellow crystal, the scoreCount is updated according to the crystal's value and displayed to the page. Then, we check
//to see whether the user won or lost, add to their win/loss record accordingly, and reset the game.

$("#Yellowcrystal").on("click", function() {
  scoreCount += yellowCrystal;
  $("#totalScoreCount").html(scoreCount);

  if (scoreCount === randomNum) {
    wins++;
    $("#wins").html(wins);
    alert("You won!");
    scoreCount = 0;
    beginGame();
  } else if (scoreCount > randomNum) {
    losses++;
    $("#losses").html(losses);
    alert("You lost...");
    scoreCount = 0;
    beginGame();
  }
});

//When user clicks on the green crystal, the scoreCount is updated according to the crystal's value and displayed to the page. Then, we check
//to see whether the use won or lost, add to their win/loss record accordingly, and reset the game.

$("#Greencrystal").on("click", function() {
  scoreCount += greenCrystal;
  $("#totalScoreCount").html(scoreCount);

  if (scoreCount === randomNum) {
    wins++;
    $("#wins").html(wins);
    alert("You won!");
    scoreCount = 0;
    beginGame();
  } else if (scoreCount > randomNum) {
    losses++;
    $("#losses").html(losses);
    alert("You lost...");
    scoreCount = 0;
    beginGame();
  }
});

//When user clicks on the red crystal, the scoreCount is updated according to the crystal's value and displayed to the page. Then, we check
//to see whether the use won or lost, add to their win/loss record accordingly, and reset the game.

$("#Redcrystal").on("click", function() {
  scoreCount += redCrystal;
  $("#totalScoreCount").html(scoreCount);

  if (scoreCount === randomNum) {
    wins++;
    $("#wins").html(wins);
    alert("You won!");
    scoreCount = 0;
    beginGame();
  } else if (scoreCount > randomNum) {
    losses++;
    $("#losses").html(losses);
    alert("You lost...");
    scoreCount = 0;
    beginGame();
  }
});

//When user clicks on the blue crystal, the scoreCount is updated according to the crystal's value and displayed to the page. Then, we check
//to see whether the use won or lost, add to their win/loss record accordingly, and reset the game.

$("#Bluecrystal").on("click", function() {
  scoreCount += blueCrystal;
  $("#totalScoreCount").html(scoreCount);

  if (scoreCount === randomNum) {
    wins++;
    $("#wins").html(wins);
    alert("You won!");
    scoreCount = 0;
    beginGame();
  } else if (scoreCount > randomNum) {
    losses++;
    $("#losses").html(losses);
    alert("You lost...");
    scoreCount = 0;
    beginGame();
  }
});
