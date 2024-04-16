//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    average() {
        let sum = 0;
        
        for (let i = 0; i < this.scores.length; i++) {
            sum = this.scores[i] + sum;
            
        }
        return Math.round(sum / this.scores.length * 10) / 10;

    }
    status() {
        let decision;

        if (this.average() >= 90) {
            decision = "Accepted";
        } else if (this.average() >= 80 && this.average() <= 89) {
            decision = "Reserve";
        } else if (this.average() >= 70 && this.average() <= 79) {
            decision = "Probationary";
        } else {
            decision = "Rejected";
        }
        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${decision}.`

    }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
bear.addScore(83);
console.log(bear);
console.log(`This is the average for Bubba Bear: ${bear.average()}`)
console.log(bear.status());

let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
console.log(maltese);
console.log(`This is the average for Merry Maltese: ${maltese.average()}`)
console.log(maltese.status());

let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
console.log(gator);
console.log(`This is the average for Glad Gator: ${gator.average()}`)
console.log(gator.status());





let currentStatus = gator.status();
let additionalTests = 0;
let alreadyReserved = false;

while(!currentStatus.includes("Accepted")) {
    gator.addScore(100);
    additionalTests += 1;
    console.log(`Added ${additionalTests} tests...\n`)
    currentStatus = gator.status(); 
    console.log(currentStatus);
    if(currentStatus.includes("Reserve") && !alreadyReserved) {
        alreadyReserved = true;
        console.log(`Gator is now Reserved after ${additionalTests} tests.\n`)
    } 
    if(currentStatus.includes("Accepted")) {
        console.log(`Gator is now Accepted after ${additionalTests} tests.\n`);
    }
}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.