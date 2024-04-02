//  1.   Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size) {
    let line = '';

    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
} 
console.log(`\nThis is a line:\n${makeLine(3)}`);

//  2.   Write a function called makeSquare(size) that returns a size by size string of hashes. 
//       The function should NOT print each row of the square. 
//       Instead, it must return a single string that contains the entire shape.

function makeSquare(size) {
    
    //console.log(`\n${makeLine(5)}\n${makeLine(5)}\n${makeLine(5)}\n${makeLine(5)}\n${makeLine(5)}`)
    
let square = '';

for (let i = 0; i < size; i++) {
    square += (makeLine(size) + '\n');
}
    return square;
} 
console.log(`\nThis is a square:\n${makeSquare(5)}`);

//  3.   Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. 
//       Use your makeLine function to do this.

function makeRectangle(width, height) {
    let rectangle = '';

    for (let i = 0; i < height; i++) {              //we want less than height because it's the number of lines to be printed
        rectangle += (makeLine(width) + '\n');      //width is going to be the number of characters in each line
    }
    return rectangle;
} 
console.log(`\nThis is a rectangle:\n${makeRectangle(2, 4)}`);

//  4.  Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. 
//      Use your makeLine function to do this.

function makeDownwardStairs(height) {
    let stairs = '';

    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs;
} 
console.log(`\nThis is a downward stairs:\n${makeDownwardStairs(6)}`);

//  5.  Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = "";

    for (let i = 0; i < numSpaces; i++) {          //this loop is for number of spaces at the beginning
        spaceLine += " ";
    }

    for (let i = 0; i < numChars; i++) {           //this loop is for the #'s that are in the middle of the string
        spaceLine += "#";
    }

    for (let i = 0; i < numSpaces; i++) {           //this loop is for the spaces at the end
        spaceLine += " ";
    }
    return spaceLine;
}

console.log(`\nThis makes a space line:\n${makeSpaceLine(3, 5)}`);


//  6.  Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.

function makeIsoscelesTriangle(height) {
    let triangle = '';

    for (let i = 0; i < height; i++) {
      triangle += ('\n' + makeSpaceLine(height - i - 1, 2*i + 1));      //formula given in textbook
    }
    return triangle;
  }
  console.log(`\nThis is a isosceles triangle:\n${makeIsoscelesTriangle(5)}`);

//  7.  Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.

  function makeDiamond(height) {
    let diamond = '';
    let top = makeIsoscelesTriangle(height);
    let bottom = '';

        for (let i = 0; i < top.length; i++) {
            bottom = top[i] + bottom;
        }
        diamond = top + '\n' + bottom;
        return diamond;
    }
console.log(`\nThis is a diamond:\n${makeDiamond(6)}`);

  //    8.  Bonus Mission: 
  //        Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. 
  //        Make the new parameter optional, with default value '#'.
