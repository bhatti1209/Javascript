var assert = require('assert'),
	codeWars = require('./../main'),
	sumInterval = new codeWars.SumInterval();

describe('Sum Of Interval Tests: ', function() {
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
	var inputArray3= [
				[1,5],
				[10, 20],
				[1, 6],
				[16, 19],
				[5, 11]
			];
	var inputArray4= [
				[ 11, 15 ], [ 6, 10 ], [ 1, 2 ]
			];

         	var expected1 = 9;
         	var expected2 = 7;
         	var expected3 = 19;
         	var expected4 = 9;

	it('Check  Sum Of Intervals', function() {
		var actual;

		actual = sumInterval.sumOfIntervals(inputArray1);
		assert.equal(actual,  expected1);

		actual = sumInterval.sumOfIntervals(inputArray2);
		assert.equal(actual,  expected2);

		actual = sumInterval.sumOfIntervals(inputArray3);
		assert.equal(actual,  expected3);

		actual = sumInterval.sumOfIntervals(inputArray4);
		assert.equal(actual,  expected4);
	});
});