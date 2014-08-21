/*
Your objective is to add formatting to a plain number to display it as price.
The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51

Numbers should use the standard comma for every 3 numbers and 
dot to separate the cents, cents need to be truncated to 2 decimals, 
in the case that the decimal part of the number is 1 character long or 
none you should add 0's so that the result will always have 2 decimal 
characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number

*/
var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.NumPrice = function (){
	};

	myNs.NumPrice.prototype.isValid = function (num){
		return (num && isNaN(num));
	};

	myNs.NumPrice.prototype.calcDecimal = function (dec){
		var decimal = "00";
		if(dec && dec.length > 0){
			decimal = dec[0];
			if(dec.length > 1)
				decimal += dec[1];
			else
				decimal += '0';
		}
		return decimal;
	};

	myNs.NumPrice.prototype.calcNumber = function (num){
		return num.split('').reverse().reduce(function (pv, cv, index, arr){
			if(arr[arr.length - 1] == '-'){
				return (index !== 0 && 
					(index + 1) % 3 === 0 && ((index + 1) !== (arr.length -1))) ? 
					( ',' + cv + pv) : (cv + pv); 
			}
			return (index !== 0 && (index + 1) % 3 === 0) ? ( ',' + cv + pv)  : (cv + pv);
		}, "");
	};

	myNs.NumPrice.prototype.numberToPrice = function (input){
		var arr = input.toString().split('.');
		if(this.isValid(arr[0]) || this.isValid(arr[1]))
			return NaN;
		return this.calcNumber(arr[0]) + '.' +  this.calcDecimal(arr[1]);
	};
})(codeWars);

module.exports = codeWars;