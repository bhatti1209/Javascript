/*
Your job is to create a calculator which evaluates expressions in 
Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3
 in normal notation) should evaluate to 14.

Note that for simplicity you may assume that there are always spaces 
between numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

http://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript
*/
var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.ReversePolish = function (){
	};

	myNs.ReversePolish.prototype.calc = function (input){
		if(!input) return 0;
		var arr = input.split(' ');
	};
})(codeWars);

module.exports = codeWars;