

var firstReverse = function(str) {
	return str.split("").reverse().join("");
}
console.log(firstReverse("strings are the bomb"));

var swapCase = function(str) {
	var words = str.split(" ");
	var whatEver = str.split('');
// 	var thatsRight = function(whatever) {
	for (var i = 0; i < whatEver.length; i++) {
		if (whatEver[i] === whatEver[i].toUpperCase()) {
			whatEver[i] = whatEver[i].toLowerCase();
		}
		else {
			whatEver[i] = whatEver[i].toUpperCase()
		}
	};
	var words = whatEver.join("")
	return words;

};

console.log(swapCase('Hello World this is bull'));