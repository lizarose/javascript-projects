let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let number = "1001";

console.log(number.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decNum = "123.45";

console.log(decNum.length - 1);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (decNum.includes(`.`)) {
    console.log(decNum.length - 1);
} else {
    console.log(decNum.length);
}