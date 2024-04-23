// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
//everything takes place in here so page loads first

//Shared Const for each button
const flightStatus = document.getElementById('flightStatus');
const shuttleBackground = document.getElementById('shuttleBackground');
const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

//Rocket Const
const rocket = document.getElementById('rocket');
let rocketPosX = 0;
let rocketPosY = 0;
let altitude = 0;


//Takeoff Button
const takeOffButton = document.getElementById('takeoff');

//Land Button
const landingButton = document.getElementById('landing');

//Abort Mission Button
const missionAbort = document.getElementById('missionAbort');



//Up Button
const upButton = document.getElementById('up');

//Down Button
const downButton = document.getElementById('down');

//Right Button
const rightButton = document.getElementById('right');

//Left Button
const leftButton = document.getElementById('left');



//Takeoff function/listener
takeOffButton.addEventListener("click", function () {
    let confirm = window.confirm("IS the shuttle ready???");
        if(confirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px";
        }
});

//Land function/listener
landingButton.addEventListener("click", function () {
    alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        resetRocket();
});

//Abort Mission function/listner
missionAbort.addEventListener("click", function () {
    let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            flightStatus.innerHTML = "Mission aborted.";
            resetRocket(); 
        }
});


//Left, Right, Up, Down function/listener
this.document.addEventListener("click", function (event) {
    //this keeps the rocket in the box from left and right side 
    let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width')); 

    if (event.target.id === "left" && rocketPosX > -(backgroundWidth / 2 - 40)) {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }
    if (event.target.id === "right" && rocketPosX < (backgroundWidth / 2 - 40)) {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px';
    }
    if (event.target.id === "up" && altitude < 250000) {
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        altitude += 10000;
        spaceShuttleHeight.innerHTML = altitude;
    }
    if (event.target.id === "down" && altitude > 0) {
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        altitude -= 10000;
        spaceShuttleHeight.innerHTML = altitude;
    }
   
});

//Reset Rocket function for landing and abort mission to make rocket start back at the beginning
function resetRocket () {
    shuttleBackground.style.backgroundColor = "green";
    altitude = 0;
    spaceShuttleHeight.innerHTML = altitude;
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + 'px';
    rocket.style.marginBottom = rocketPosY + 'px';
};

});