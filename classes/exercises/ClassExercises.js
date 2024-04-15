// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        //assign properties
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn; 
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    //define methods
        checkout(uses = 1) {
            this.timesCheckedOut += uses;
        }
}
// Define your Manual and Novel classes here:
class Manual extends Book {         //use extend when designating a class as the child class of another
    //method #1:
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);       //use super constructor to get the properties and methods needed from the parent class
        }
    //method #2:
    dispose(currentYear) {          //a function to determine if a manual needs to be thrown out
        if (currentYear - this.copyright > 5) {
            this.discarded = "Yes";
        }
    }
}

class Novel extends Book {
    //method #1:
    constructor(title, author, copyright, isbn, pages, timesCheckedOut,discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    //method #2:
    dispose() {             //a function to determine if a novel needs to be thrown out
        if (this.timesCheckedOut > 100) {
            this.discarded = "Yes";
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let manuals = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, "No");

let novels = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
// Code exercises 4 & 5 here:
novels.checkout(5);
novels.dispose();