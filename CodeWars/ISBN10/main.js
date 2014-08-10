/*
ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. 
The last digit can be either on the range 0 to 9 or the letter 'X' used to
 indicate a value of 10.

For an ISBN-10 to be valid, the sum of the digits multiplied by 
their position has to equal zero modulo 11. 
For example, the ISBN-10: 1112223339 is valid
*/
var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.ISBN10 = function (){
	};

	myNs.ISBN10.prototype.isValidISBN10 = function (input){

	};
})(codeWars);

module.exports = codeWars;