let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)},
   crewsReport: function() {return `${superChimpOne.name} is a ${superChimpOne.species}. They are ${superChimpOne.age} years old and ${superChimpOne.mass} kilograms. Their ID is ${superChimpOne.astronautID}.`}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)},
   crewsReport: function() {return `${salamander.name} is a ${salamander.species}. They are ${salamander.age} years old and ${salamander.mass} kilograms. Their ID is ${salamander.astronautID}.`}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)},
   crewsReport: function() {return `${superChimpTwo.name} is a ${superChimpTwo.species}. They are ${superChimpTwo.age} years old and ${superChimpTwo.mass} kilograms. Their ID is ${superChimpTwo.astronautID}.`}
};

let cuteDoggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)},
   crewsReport: function() {return `${cuteDoggo.name} is a ${cuteDoggo.species}. They are ${cuteDoggo.age} years old and ${cuteDoggo.mass} kilograms. Their ID is ${cuteDoggo.astronautID}.`}
};

let microWaterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 9,
   move: function () {return Math.floor(Math.random()*11)},
   crewsReport: function() {return `${microWaterBear.name} is a ${microWaterBear.species}. They are ${microWaterBear.age} years old and ${microWaterBear.mass} kilograms. Their ID is ${microWaterBear.astronautID}.`}
};
// After you have created the other object literals, add the astronautID property to each one.
// Create an array to hold the animal objects.

let crewNames = [superChimpOne, salamander, superChimpTwo, cuteDoggo, microWaterBear]

// Print out the relevant information about each animal.
// Start an animal race!
console.log("\nStart an animal race!\n")
console.log(`Chad:${superChimpOne.move()}`);
console.log(`Brad:${superChimpTwo.move()}`);
console.log(`Lacey:${salamander.move()}`);
console.log(`Leroy:${cuteDoggo.move()}`);
console.log(`Almina:${microWaterBear.move()}`);

//Part 2: Crew Reports
console.log('\nCrew Reports:')
console.log(superChimpOne.crewsReport());
console.log(salamander.crewsReport());
console.log(superChimpTwo.crewsReport());
console.log(cuteDoggo.crewsReport());
console.log(microWaterBear.crewsReport());

//Part 3: Physical Fitness Test

function fitnessTest(array) {
   let results = [];

   for (let i = 0; i < array.length; i++) {
      let numSteps = 0;
      let turns = 0;

      while(numSteps < 20) {
         numSteps += array[i].move();
         turns++;
      }
      results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
} 
fitnessTest(crewNames)

console.log('\nPhysical Fitness Test Results:');

console.log(fitnessTest(crewNames));
