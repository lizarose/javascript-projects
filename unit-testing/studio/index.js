
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: "100",
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    let phrase;

    if(num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
        phrase = "Rutabagas! That doesn't work.";
        return phrase;

    } else if (num % 2 === 0 && num % 3 === 0 && num % 5 ===0) {
        phrase = "LaunchCode Rocks!";
        return phrase;

    } else if (num % 2 === 0 && num % 5 === 0) {
        phrase = "Launch Rocks!";
        return phrase;

    } else if (num % 3 === 0 && num % 5 === 0) {
        phrase = "Code Rocks!";
        return phrase;

    } else if (num % 2 === 0 && num % 3 === 0) {
        phrase = "LaunchCode!";
        return phrase;

    } else if (num % 5 === 0) {
        phrase = "Rocks!";
        return phrase;

    } else if (num % 3 === 0) {
        phrase = "Code!";
        return phrase;

    } else if (num % 2 === 0) {
        phrase = "Launch!";
        return phrase;

    } else {
        phrase = "Not Acceptable. Try Again."
        return phrase;
    }
  }

}
console.log(launchcode.launchOutput())

module.exports = launchcode;

