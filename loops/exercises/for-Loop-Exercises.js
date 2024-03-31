/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

const { reverse } = require("dns");

// a. Print the numbers 0 - 20, one number per line.

for (let i = 0; i < 21; i++) {
  console.log(i);
}

// b. Print only the ODD values from 3 - 29, one number per line.

let number = 29;

for (let i = 3; i <= number; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
}

// c. Print the EVEN numbers 12 to -14 in descending order, one number per line.

for (let i = 12; i > -15; i--) {
        if (i % 2 === 0) {
           console.log(i);
  }
}

//d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 50; i > 21; i--) {
        if (i % 3 === 0) {
            console.log(i);
        }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 


// Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

let str = 'LaunchCode';
let arr = [1, 5, 'LC101', 'blue', 42];

// Construct ``for`` loops to accomplish the following tasks:
  //  a. Print each element of the array to a new line.

        for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
        }

  //  b. Print each character of the string - in reverse order - to a new line. */ 
      
  let reversed = '';

        for (let i = 0; i <str.length; i++) {
              reversed = str[i] + reversed;
        }
        console.log(reversed);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */


//*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
      
        let arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

//  a. One array contains the even numbers, and the other holds the odds.

        let evenArr = [];
        let oddArr = [];

//  b. Print the arrays to confirm the results. */

        for (let i = 0; i < arr2.length; i++) {
              if (arr2[i] % 2 === 0) {
                evenArr.push(arr2[i]);
                console.log(evenArr);
              } else {
                oddArr.push(arr2[i]);
                console.log(oddArr);
              }
        } 
       
        console.log(`This is the evens: ${evenArr}. \n\nThis is the odds: ${oddArr}.`)