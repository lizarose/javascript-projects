const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

let aStart = function(a) {
  if (userInput[0] !== 'a')
  return userInput;
}

// TODO 2: write a validator 
// that ensures input is a vowel
let vowel = ['a','e','i','o','u','y'];

let vowelInput = function(n) {
  if (userInput !== vowel)
  return userInput;
}

// Be sure to test your code!
console.log(getValidInput(aStart));