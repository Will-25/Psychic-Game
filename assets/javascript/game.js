var wins = 1;
var losses = 1;
var guessesLeft = 9;





var winss = document.getElementById("wins");
var loser = document.getElementById("losses");
var guess = document.getElementById("guessesLeft");
var what = document.getElementById("yourGuess");
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var soFar = [];


document.onkeyup = function (event) {
  

  var userGuess = event.key;
  what.textContent = "Your Guesses so far: " + soFar.push(userGuess);
  

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess === computerGuess) {

    winss.textContent = "Wins: " + wins++;
    what.textContent = "Your Guesses so Far: " + soFar;
    guess.textContent = "Guesses Left: " + guessesLeft--;
    


  }
  else {
    what.textContent = "Your Guesses so Far: " + soFar;
    guess.textContent = "Guesses Left: " + guessesLeft--;
    
  }

  if (guessesLeft === 0) {
    loser.textContent = "Losses: " + losses++;
        guessesLeft= 9;
        
  } 
  if (soFar.length === 9) {
    soFar.length = 0;
    

  }



};