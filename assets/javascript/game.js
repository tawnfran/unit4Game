// function to show what each button crystal does
// define global varibales 
//-------------------------------
var targetNumber = Math.floor(Math.random() * 101 + 19);
var workingTotal = 0;
var wins = 0;
var losses = 0;
var blueB = Math.floor(Math.random() * 11 + 1);
var purpleB = Math.floor(Math.random() * 11 + 1);
var redB = Math.floor(Math.random() * 11 + 1);
var yellowB = Math.floor(Math.random() * 11 + 1);



// prepare game for function/ reset the game function 
// randomize all 4 buttons and goal number
function reset() {
    blueB = Math.floor(Math.random() * 11 + 1);
    purpleB = Math.floor(Math.random() * 11 + 1);
    redB = Math.floor(Math.random() * 11 + 1);
    yellowB = Math.floor(Math.random() * 11 + 1);
    targetNumber = Math.floor(Math.random() * 101 + 19);
    workingTotal = 0;
    $("#workingTotal").text(workingTotal);
    $("#target-score").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

// run function to play game
function play(color) {
    console.log(`You pressed the ${color} crystal.`);
    workingTotal = workingTotal + color;
    $("#workingTotal").text(workingTotal);
}


// run function to compare working total to goal number

function compare() {
    console.log(`Working total is: ${workingTotal} and target number is ${targetNumber}`);
    if (targetNumber === workingTotal) {
        winGame();
    } else if (targetNumber < workingTotal) {
        loseGame();
    }
}

function winGame() {
    alert("You win!");
    reset();
    wins++;
    console.log('You have won! Your win count is now ' + wins);
    $("#wins").text(wins);
}

function loseGame() {
    alert("You lose!");
    reset();
    losses++;
    console.log('You have lost! Your loss count is now ' + losses);
    $("#losses").text(losses);
}

reset();
$('#blue-button').on({
    'click': function () {
        // add value of blue to working total
        play(redB);
        // check player's score to working total
        compare();
    }
});

$('#purple-button').on({
    'click': function () {
        play(blueB);
        compare();
    }
});

$('#red-button').on({
    'click': function () {
        play(purpleB);
        compare();
    }
});

$('#yellow-button').on({
    'click': function () {
        play(yellowB);
        compare();
    }
});
