var wins = 1;
var losses = 1;
var guessesLeft = 9;





var winss = document.getElementById("wins");
var loser = document.getElementById("losses");
var guess = document.getElementById("guessesLeft");
var what = document.getElementById("yourGuess");
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function (event) {
  

  var userGuess = event.key;


  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess === computerGuess) {

    winss.textContent = wins++;
    what.textContent = userGuess;
    guess.textContent = guessesLeft--;
    


  }
  else {
    
    what.textContent = userGuess;
    guess.textContent = guessesLeft--;
    what.textContent = userGuess;
  }

  if (guessesLeft === 0) {
    loser.textContent = losses++;
        guessesLeft= 9;
  }



};