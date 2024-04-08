// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return Math.round(circumference)
}
//console.log(orbitCircumference(2000))
// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius, orbitSpeed) {
  orbitRadius = 2000;
  orbitSpeed = 28000;
  
  let time = orbitCircumference(orbitRadius)/orbitSpeed;
  //console.log(time);
  let roundedTime = Math.round(time * 100) / 100;
  let totalTrip = roundedTime * numOrbits;
  let totalDistance = orbitCircumference(orbitRadius) * numOrbits;
 
  return `The mission will travel ${totalDistance} km around the planet, and it will take ${totalTrip} hours to complete.`
}
console.log(missionDuration(5))
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array) {
  let randomSelect = Math.floor(Math.random()*array.length);
  randomSelect = array[randomSelect];
  return randomSelect;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius, orbitSpeed) {
let spacewalkLength = missionDuration(3, orbitRadius, orbitSpeed);
let o2Consumed = Math.round(candidate.o2Used(3) * 1000) / 1000;
return `${candidate.name} will perform the spacewalk, which will last ${spacewalkLength} hours and require ${o2Consumed} kg of oxygen.`
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 console.log(oxygenExpended(candidateA));
 
