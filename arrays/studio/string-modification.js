const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let pigLatinStr = str.slice(3) + str.slice(0,3);
console.log(str.slice(0, 3));

console.log(str.slice(3));

console.log(pigLatinStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} becomes ${pigLatinStr}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question("How many letters will be relocated?: ");
numOfLetters = Number(numOfLetters);
console.log(`User entered:  ${numOfLetters}`);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numOfLetters > str.length) {
    numOfLetters = 3;
    console.log("Error: Using default length.");
} 
console.log(`We are using: ${numOfLetters}`);
pigLatinStr = str.slice(numOfLetters) + str.slice(0,numOfLetters);
console.log(pigLatinStr);