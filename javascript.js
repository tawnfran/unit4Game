
//frontend
//define variables 
//4 buttons, random val 1-12
//goal= ran val 1-200

// goal- score they are trying to get 
var goal;

// working total as player guesses #
var guessTotal;

// score for how many wins and losses have occured
var wins = 0;
var losses = 0;

// variables for crystal buttons to generate random value
var blueGem;
var purpleGem;
var redGem;
var yellowGem;



//functions to start playing game
// reset all game functions for all 4 crystals 
function reset() {
	blueGem = Math.floor(Math.random() * 11 + 1);
	purpleGem = Math.floor(Math.random() * 11 + 1);
	redGem = Math.floor(Math.random() * 11 + 1);
	yellowGem = Math.floor(Math.random() * 11 + 1);
	goal = Math.floor(Math.random() * 101 + 19);
	guessTotal = 0;
	$("#guessTotal").text(guessTotal);
	$("#goal").text(goal);
}

reset();
//function for buttons to work 
//function pushButtons() {
// document.getElementById("pictures").innerHTML = "random number";
//}



//function to create btns and goal
//function to compare variable to guessTotal
// function compare () {}


//onclick event to check scores/update scores

$("#blue").on("click", function () {
	console.log("blue button value is " + blueGem);
	guessTotal = guessTotal + blueGem
	console.log(guessTotal)
	$("#guessTotal").text(guessTotal);
	outcome();
})

$("#purple").on("click", function () {
	console.log("purple button value is " + purpleGem);
	guessTotal = guessTotal + purpleGem
	console.log(guessTotal)
	$("#guessTotal").text(guessTotal);
	outcome();
})

$("#red").on("click", function () {
	console.log("red button value is " + redGem);
	guessTotal = guessTotal + redGem
	console.log(guessTotal)
	$("#guessTotal").text(guessTotal);
	outcome();
})

$("#yellow").on("click", function () {
	console.log("yellow button value is " + yellowGem);
	guessTotal = guessTotal + yellowGem
	console.log(guessTotal)
	$("#guessTotal").text(guessTotal);
	outcome();
})

//if targetscore==usertotal
function outcome() {
	if (guessTotal === goal) {
		alert("You Win!");
		console.log("Since you won! your score is now " + wins);
		reset();
		wins++;
		$("#wins").text(wins);
	}
	//else if 
	else if (guessTotal > goal) {
		console.log("You have lost! Your score is now " + losses);
		alert("You lose!");
		reset();
		losses++;
		$("#losses").text(losses);
	}

}
