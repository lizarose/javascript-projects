// Code your selectRandomEntry function here:

function selectRandomEntry(array) {
  let randomSelect = Math.floor(Math.random()*array.length);
  randomSelect = array[randomSelect];
  return randomSelect;
}
let idNumbers = [291, 414, 503, 599, 796, 890];

let randomArray = [];
while(randomArray.length < 3) {
  let randomCrewMember = selectRandomEntry(idNumbers);
  if(!randomArray.includes(randomCrewMember)) {
    randomArray.push(randomCrewMember);
  } else {
    console.log("This crew member is already in a mission.");
  }
}
console.log(randomArray);
// Code your buildCrewArray function here:
function buildCrewArray(idArray, candArray) {
  let crewArray = [];

  for(let i = 0; i < candArray.length; i++) {
    //let crewArray = [];
    if (idArray.includes(candArray[i].astronautID)) {
      crewArray.push(candArray[i]);
    }
  }
  return crewArray;
}
//console.log(buildCrewArray(randomArray, animals));

console.log(selectRandomEntry(idNumbers));

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let crew = buildCrewArray(randomArray, animals);
console.log(crew[0].astronautID, crew[1].astronautID, crew[2].astronautID);
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);

console.log(buildCrewArray(randomArray, animals));
