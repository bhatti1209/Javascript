var assert = require('assert'),
	codeWars = require('./../main'),
	isbn = new codeWars.ISBN10();

describe('ISBN Tests: ', function() {
	var inputArray1 = "1112223339";
	var inputArray2 = "1234554321";
	var inputArray3 = "1234512345";
         	var expected1 = true;
         	var expected2 = true;
         	var expected3 = false;

	it('isValidISBN10', function() {
		var actual1 = isbn.isValidISBN10(inputArray1);
		assert.equal(actual1,  expected1);

		var actual2 = isbn.isValidISBN10(inputArray2);
		assert.equal(actual2,  expected2);

		var actual3 = isbn.isValidISBN10(inputArray3);
		assert.equal(actual3,  expected3);
	});
});