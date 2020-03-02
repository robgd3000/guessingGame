// This is a guessing game. It is modelled after the game "Hangman".

// Array of Words

var wordlist = ["rain", "lightening", "chair", "cheer", "cajon", "game", "guess", "thunder", "nature", "nurture", "math", "science", "code", "six", "five", "books", "blessing", "keyboard", "guitar", "drum", "baby", "string", "author", "painter", "music", "mystery", "actor", "carpet", "candle", "firework", "apple", "rice", "curry", "butter", "freezer", "sleep"];

//random word from array

var word = wordlist[Math.floor(Math.random()) * wordlist.length];

// sets up answer array

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// variable to hold number of remaining letters
var remainingLetters = word.length;


// MAIN GAME LOOP

while (remainingLetters > 0) {
    
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to quit.");

    if (guess === null) {
        break;
    
    } else if (guess.length !== 1) {
        alert("Please enter only one letter.");
    
    } else {
        
        for (var j = 0; j < word.length; j++) {
            
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

}

// end of game

alert(answerArray.join(" "));
alert("Great Job! The word was " + word +"!")