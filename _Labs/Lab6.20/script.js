function calcWordFrequencies() {
    // read input from prompt
    const input = prompt("Enter a list of words separated by spaces:");
  
    // create a map to store word frequencies
    const wordMap = new Map();
  
    // split the input into an array of words
    const words = input.split(" ");
  
    // loop through the words and update the map
    for (let word of words) {
      if (wordMap.has(word)) {
        // increment the frequency if the word is already in the map
        wordMap.set(word, wordMap.get(word) + 1);
      } else {
        // add the word to the map with frequency 1 if it's not already in the map
        wordMap.set(word, 1);
      }
    }
  
    // log the word frequencies to the console
    for (let [word, freq] of wordMap) {
      console.log(`${word} ${freq}`);
    }
  }
  