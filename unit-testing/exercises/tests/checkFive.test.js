//const test = require('../checkFive.js');

const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("Should produce the correct output when passed a number less than 5.", function() {
      
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
   });

});