describe("Module", function() {
  it("should take a string and return the reverse", function() {
    expect(firstReverse('strings')).toEqual('sgnirts');
  });
});

describe("Module", function() {
  it("should take a string and return the reverse", function() {
    expect(firstReverse('strings are the bomb')).toEqual('bmob eht era sgnirts');
  });
});

describe("Module", function() {
  it("should take a string and return the string with opposite cases", function() {
    expect(swapCase('Hello World')).toEqual('hELLO wORLD');
  });
});

// var firstReverse = function(str) {
// 	return str.split("").reverse().join("");
// }
// console.log(firstReverse("strings"));