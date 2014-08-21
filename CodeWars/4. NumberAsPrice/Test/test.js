var assert = require('assert'),
	codeWars = require('./../main'),
	numPrice = new codeWars.NumPrice();

describe('Num Price Tests: ', function() {
	it('numberToPrice', function() {
		var inputArray, expected, actual;

		inputArray = 13253.5123;
		expected = "13,253.51";
		actual = numPrice.numberToPrice(inputArray);
		assert.equal(actual,  expected);

		inputArray = 13253.5;
		expected = "13,253.50";
		actual = numPrice.numberToPrice(inputArray);
		assert.equal(actual,  expected);

		inputArray = "13253";
		expected = "13,253.00";
		actual = numPrice.numberToPrice(inputArray);
		assert.equal(actual,  expected);

		inputArray = 1323123123253.51223;
		expected = "1,323,123,123,253.51";
		actual = numPrice.numberToPrice(inputArray);
		assert.equal(actual,  expected);

		inputArray = '-5.0';
		expected = "-5.00";
		actual = numPrice.numberToPrice(inputArray);
		assert.equal(actual,  expected);

		inputArray = "-200000.10";
		expected = "-200,000.10";
		actual = numPrice.numberToPrice(inputArray);
		assert.equal(actual,  expected);

		inputArray = "153a.5123";
  		expected = NaN;
		actual = numPrice.numberToPrice(inputArray);
		//assert.equal(actual,  expected);
	});
});