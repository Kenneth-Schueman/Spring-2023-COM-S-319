function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;
  let guess;

  while (guessCount < totalGuesses) {
    if (guessCount === 0) {
      guess = prompt("Enter a number between 1 and 100.");
    } 
    else {
      if (guess < numToGuess) {
        guess = prompt(`${guess} is too small. Guess a larger number.`);
      } 
      else if (guess > numToGuess) {
        guess = prompt(`${guess} is too large. Guess a smaller number.`);
      }
    }

     if (guess === null || guess == "Cancel") {
       return 0;
    }

    if (isNaN(parseInt(guess))) {
      guess = prompt("Please enter a number.");
      continue;
    }

    guessCount++;

    if (parseInt(guess) === numToGuess) {
      return guessCount;
    }
  }

  return 0;
}
