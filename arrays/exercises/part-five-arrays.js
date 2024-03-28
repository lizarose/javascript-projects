let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());           //prints as normal
console.log(str.split('e'));        //removes all the 'e' from the words and groups items 2 words together.
console.log(str.split(' '));        //puts each word as an item.
console.log(str.split(''));         //puts each letter including spaces and the period as an item.
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());        //prints as B,n,n,5
console.log(arr.join('a'));     //prints as Banana5, adding an 'a' between each item and removing commas.
console.log(arr.join(' '));     //prints as B n n 5, removing all commas and adding a space between each item
console.log(arr.join(''));      //prints as Bnn5, removing commas and spaces and having everything sit together
//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);
                            //split and join do not change the original string/array.
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));