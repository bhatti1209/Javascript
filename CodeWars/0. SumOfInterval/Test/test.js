var assert = require('assert'),
	codeWars = require('./../main'),
	sumInterval = new codeWars.SumInterval();

describe('Snails Tests: ', function() {
	var inputArray1 = [
				[1,2],
				[6, 10],
				[11, 15]
			];
	var inputArray2 = [
				[1,4],
				[7, 10],
				[3, 5]
			];
	var inputArray2 = [
				[1,5],
				[10, 20],
				[1, 6],
				[16, 19],
				[5, 11]
			];
         	var expected1 = 9;
         	var expected2 = 7;
         	var expected3 = 19;

	it('Check  Remove Zeros', function() {
		var actual;

		actual = sumInterval.sumOfIntervals(inputArray1);
		assert.equal(actual,  expected1);

		actual = sumInterval.sumOfIntervals(inputArray2);
		assert.equal(actual,  expected2);

		actual = sumInterval.sumOfIntervals(inputArray3);
		assert.equal(actual,  expected3);
	});
});