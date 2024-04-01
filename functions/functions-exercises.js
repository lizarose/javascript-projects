function makeLine(size) {
   
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
} console.log(makeLine(5));




function makeSquare(size) {
    
    console.log(`\n${makeLine(5)}\n${makeLine(5)}\n${makeLine(5)}\n${makeLine(5)}\n${makeLine(5)}`)
    
} makeSquare(5)





// function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//         rectangle += (makeLine(width) + '\n');
//     }
//     return makeRectangle();
// } console.log(makeRectangle(2,2))