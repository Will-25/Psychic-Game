var wins = 0;
var losses = 0;
var guessesLeft = 9;

var winss = document.getElementById("wins")
var loser = document.getElementById("losses")
var guess = document.getElementById("guessesLeft")
var what = document.getElementById("yourGuess")
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
document.onkeyup = function(event) {
    
    var userGuess = event.key;
    
    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  if (userGuess === computerGuess){

    winss.textContent = winss++;
    what.textContent = userGuess;
    guess.textContent = guessesLeft--;

  }
  else {
      loser.textContent = loser++;
      what.textContent = userGuess;
      guess.textContent = guessesLeft--;
  }
  

};