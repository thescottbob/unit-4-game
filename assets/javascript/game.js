//Set the value of each crystal to a random number between 0 and 12 at the start of each round.
//If random value = 0, then select a new random value. Log each value in the console for testing.

var yellowCrystal = Math.floor(Math.random() * Math.floor(12));
if (yellowCrystal === 0){
    yellowCrystal = Math.floor(Math.random() * Math.floor(12));
}
console.log(yellowCrystal)

var greenCrystal = Math.floor(Math.random() * Math.floor(12));
if (greenCrystal === 0){
    greenCrystal = Math.floor(Math.random() * Math.floor(12));
}
console.log(greenCrystal)

var redCrystal = Math.floor(Math.random() * Math.floor(12));
if (redCrystal === 0){
    redCrystal = Math.floor(Math.random() * Math.floor(12));
}
console.log(redCrystal)

var blueCrystal = Math.floor(Math.random() * Math.floor(12));
if (blueCrystal === 0){
    blueCrystal = Math.floor(Math.random() * Math.floor(12));
}
console.log(blueCrystal)

//Set the value of the randomNum between 0 and 120 at the start of each round. If random value is less than 12, then select a new random value. 
//Log to the console for testing, and display to the HTML.

var randomNum = Math.floor(Math.random() * Math.floor(120));
  $("#randomValue").html(randomNum);
if (randomNum < 12){
  randomNum = Math.floor(Math.random() * Math.floor(120));
  $("#randomValue").html(randomNum);
}
console.log(randomNum);

//Set the initial scoreCount equal to 0

var scoreCount= 0;
var updatedScoreCount= [];

//Declaring two variables to track (and set the initial values of) the wins and losses of the user

var wins= "0";
var losses= "0";

//When user clicks on the yellow crystal, the scoreCount is updated according to the crystal's value and displayed to the page. Then, we check
//to see whether the use won or lost, add to their win/loss record accordingly, and reset the game.

$("#Yellowcrystal").on("click", function() {
  scoreCount += yellowCrystal;
  $("#totalScoreCount").html(scoreCount);
  
if (scoreCount === randomNum) {
    wins++;
    $("#wins").html(wins);
    //reset game;
  }
  else if(scoreCount > randomNum){
    alert("You lost");
    //reset game 
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
    //reset game;
  }
  else if(scoreCount > randomNum){
    alert("You lost");
    //reset game 
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
    //reset game;
  }
  else if(scoreCount > randomNum){
    alert("You lost");
    //reset game 
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
    //reset game;
  }
  else if(scoreCount > randomNum){
    alert("You lost");
    //reset game 
  }
});
