const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///

  for (let i = 0; i < numMeals; i++) {    // Outer loop: iterates until we have enough meals
  let meal = [];                                      //needs to be here so when the loop starts over it clears out the last array and puts a new one in its place
        for (let j = 0; j < pantry.length; j++){      //Inner loop: creating individaul meals
          meal.push(pantry[j][i]);                    //[j]: looks at the arrays i.e. proteins, grains
          //console.log(meal);                          //[i]: looks at the index in each array and stays the same i.e. chicken, rice, peas, juice, apple
        }                                             //pantry[j][i]: we go to pantry, then inside that and want the indexes of [j] so [j] first and then [i] to get it's indexes
        meals.push(meal);
}

  return meals;
}


function askForNumber() {
  numMeals = input.question("How many meals would you like to make? ");
  
  /// CODE YOUR SOLUTION TO PART B here ///

while (numMeals > 6 || numMeals < 1 || isNaN(numMeals)) {                           //use while loop to validate to make sure the user enters a number 1-6 and will keep asking them until they enter a vaild number
  numMeals = input.question("Please enter a number between 1 and 6:\t ");

} 

  return numMeals;
} 


function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///


for (let i = 0; i < string1.length; i++) {
      code += string1[i] + string2[i];
}

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  let password1 = 'LoOt'; //'1234';   'ABCDEF';
  let password2 = 'oku!'; //'5678';   'notyet';
  console.log("Time to run the password generator so we can update the menu tomorrow.")
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
