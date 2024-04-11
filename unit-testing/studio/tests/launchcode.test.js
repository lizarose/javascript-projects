// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
    // Write your unit tests here!
  test("should be true if it is nonprofit", function () {
    expect(launchcode.organization).toEqual("nonprofit")
  });
  test("should be true if it is Jeff", function () {
    expect(launchcode.executiveDirector).toEqual("Jeff")
  });
  test("should be true if it is 100", function () {
    expect(launchcode.percentageCoolEmployees).toEqual("100")
  });
  test('should be true if it is ["Web Development", "Data Analysis", "Liftoff"]', function () {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });
  test("When passed a number that is ONLY divisible by 2", function () {
    expect(launchcode.launchOutput(4)).toEqual("Launch!")
  });
  test("When passed a number that is ONLY divisible by 3", function () {
    expect(launchcode.launchOutput(9)).toEqual("Code!")
  });
  test("When passed a number that is ONLY divisible by 5", function () {
    expect(launchcode.launchOutput(25)).toEqual("Rocks!")
  });
  test("When passed a number that is divisible by 2 AND 3", function () {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!")
  });
  test("When passed a number that is divisible by 3 AND 5", function () {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!")
  });
  test("When passed a number that is divisible by 2 AND 5", function () {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!")
  });
  test("When passed a number that is divisible by 2, 3, AND 5", function () {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!")
  });
  test("When passed a number that is NOT divisible by 2, 3, or 5", function () {
    expect(launchcode.launchOutput()).toEqual("Rutabagas! That doesn't work.")
  });



});

