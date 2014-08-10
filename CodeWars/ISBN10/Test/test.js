var assert = require('assert'),
	codeWars = require('./../main'),
	isbn = new codeWars.ISBN10();

describe('Snails Tests: ', function() {
	var inputArray1 = "1112223339";
	var inputArray2 = "1234554321";
	var inputArray3 = "1234512345";
         	var expected1 = true;
         	var expected2 = true;
         	var expected3 = false;

	it('Check  Remove Zeros', function() {
		isbn.isValidISBN10(inputArray1);
		assert.equal(inputArray1,  expected1);
	});
});