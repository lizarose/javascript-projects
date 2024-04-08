// Code your crewMass function here:
function crewMass(candidate) {
  let totalMass = Math.round(candidate.mass * 10) / 10;
  return totalMass;
}

// Code your fuelRequired function here:
function fuelRequired(crew) {
  let fuelNeedForLEO = 9.5;
  let emptyRocketPlusFood = 75000;
  let rocketPlusFoodAndPeople = emptyRocketPlusFood;
  for (let i = 0; i < crew.length; i++) {
    rocketPlusFoodAndPeople += crew[i].mass;
    console.log(`Added ${crew[i].name} mass ${crew[i].mass}`)
  }
  let fuelWithCandidateNeeded = rocketPlusFoodAndPeople * fuelNeedForLEO;

  let extraFuel = 0;
  for (let i = 0; i < crew.length; i++) {
  if(crew[i].species === 'dog' || crew[i].species === 'cat') {
    extraFuel += 200;
  } else {
    extraFuel += 100;
  }
}
let roundedTotalNum = Math.round(fuelWithCandidateNeeded + extraFuel);
  console.log(`The mission has a launch mass of ${fuelWithCandidateNeeded} kg and requires ${roundedTotalNum} kg of fuel.`)
  return roundedTotalNum;
}
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
 //console.log(crewMass(candidateA));
console.log(fuelRequired(crew));
