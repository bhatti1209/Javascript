var assert = require('assert'),
	codeWars = require('./../main'),
	rz = new codeWars.removeZero();

describe('Snails Tests: ', function() {
	var inputArray1 = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
	var inputArray2 = [7, 2, 3, 0, 4, 6, 0, "0", 13, "0", 78, "0", 0, 19, 14];
         	var expected1 = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
         	var expected2 = [7, 2, 3, 4, 6, 13, 78, 19, 14, "0", "0", "0", 0, 0, 0];

	it('Check  Remove Zeros', function() {
		rz.removeZero(inputArray1);
		assert.deepEqual(inputArray1,  expected1);

		rz.removeZero(inputArray2);
		assert.deepEqual(inputArray2,  expected2);
	});
});