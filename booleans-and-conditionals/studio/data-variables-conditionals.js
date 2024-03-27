// Initialize Variables below
let date = "Monday 2019-03-18";
let time = ("10:05:34 AM");
let astronautCount = 7;
let astronauntStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("not ready")
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronauntStatus && preparedForLiftOff) {
    preparedForLiftOff = true;
    console.log("Ready for lift off!");
} else {
    preparedForLiftOff = false;
    console.log("System Failed.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (maximumMassLimit < totalMassKg && preparedForLiftOff) {
    preparedForLiftOff = false;
    console.log("System Failed.");
} else {
    preparedForLiftOff = true;
    console.log("Ready for lift off!");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {4
    preparedForLiftOff = true;
    console.log("Ready for lift off!");
} else {
    preparedForLiftOff = false;
    console.log("System Failed.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel) {
    preparedForLiftOff = true;
    console.log("Ready for lift off!");
} else {
    preparedForLiftOff = false;
    console.log("System Failed.");
}
// add logic below to verify the weather status is clear
if (weatherStatus) {
    preparedForLiftOff = true;
    console.log("Ready for lift off!");
} else {
    preparedForLiftOff = false;
    console.log("System Failed.");
}
// Verify shuttle launch can proceed based on above conditions
