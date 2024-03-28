let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepAidsArray = sleepAids.split(',').sort();


console.log(`${foodArray} \n${equipmentArray} \n${petsArray} \n${sleepAidsArray}`);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHoldArray = [foodArray, equipmentArray, petsArray, sleepAidsArray];

console.log(cargoHoldArray);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

let Query = input.question("Select a cabinet number 0-3: ");
let cabinetIdx = Number(Query);


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`Contents of cabinet ${cabinetIdx}: \n\t${cargoHoldArray[cabinetIdx]} `);

if (cabinetIdx < 0 || cabinetIdx > 3) {
    console.log(`Error ${Query} is not valid. Please pick a number between 0 and 3.`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let item = input.question("Input item: ");
let userSelectedCabinet = cargoHoldArray[cabinetIdx];

if (cabinetIdx >= 0 || cabinetIdx <= 3) {
    userSelectedCabinet = cargoHoldArray[cabinetIdx];
        if (userSelectedCabinet.includes(item)) {
            console.log(`Cabinet ${cabinetIdx} DOES contain ${item}.`);
        } else {
            console.log(`Cabinet ${cabinetIdx} DOES NOT contain ${item}.`);
        }
}

