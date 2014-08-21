/*
ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. 
The last digit can be either on the range 0 to 9 or the letter 'X' used to
 indicate a value of 10.

For an ISBN-10 to be valid, the sum of the digits multiplied by 
their position has to equal zero modulo 11. 
For example, the ISBN-10: 1112223339 is valid.
*/
var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.ISBN10 = function (){
	};

	myNs.ISBN10.prototype.isValidISBN10 = function (input){
		var arr = input.split('');
		if(arr.length !== 10)
			return false;
		var sum = arr.reduce(function (pv, cv, index){
			var weight = parseInt(cv);
			if(index === 9 && isNaN(weight)){
				weight = 10;
			}
			return pv + ((index + 1) * weight);
		}, 0);
		return (sum % 11 === 0);
	};
})(codeWars);

module.exports = codeWars;