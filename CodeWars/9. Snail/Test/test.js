var assert = require('assert'),
	codeWars = require('./../main'),
	snails = new codeWars.snails();

describe('Snails Tests: ', function() {
	var inputArray1 = [	
		[1,2,3],
         		[4,5,6],
         		[7,8,9]
         	       ];
         	var inputArray2 = [	
		[1,2,3,4],
         		[5,6,7,8],
         		[9,10,11,12],
         		[12,13,14,15]
         	       ];

	it('Check Horizontal Remove', function() {
		var rowNumber, expected, expectedRemovedRow, removedRow,array;

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		rowNumber = 0;
		expected = [[4,5,6],[7,8,9]];
		expectedRemovedRow = [1,2,3];
		removedRow = snails.removeHorizontal(array, rowNumber);
		assert.deepEqual(array,  expected);
		assert.deepEqual(removedRow,  expectedRemovedRow);

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		rowNumber = 2;
		expected = [[1,2,3],[4,5,6]];
		expectedRemovedRow = [7,8,9];
		removedRow = snails.removeHorizontal(array, rowNumber);
		assert.deepEqual(array,  expected);
		assert.deepEqual(removedRow,  expectedRemovedRow);
	});

	it('Check Horizontal MoveAndSplice', function() {
		var scanRight, rowNumber, expected,expectedArray, actual,array;

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		scanRight = true;
		rowNumber = 0;
		expected = [1,2,3];
		expectedArray = [[4,5,6],[7,8,9]];
		actual = snails.moveAndSpliceHorizontal(array, rowNumber, scanRight);
		assert.deepEqual(actual,  expected);
		assert.deepEqual(array,  expectedArray);

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		scanRight = false;
		rowNumber = 2;
		expected = [9,8,7];
		expectedArray = [[1,2,3],[4,5,6]];
		actual = snails.moveAndSpliceHorizontal(array, rowNumber, scanRight);
		assert.deepEqual(actual,  expected);
		assert.deepEqual(array,  expectedArray);
	});

	it('Check Vertical Remove', function() {
		var columnNumber, expected, expectedRemovedColumn, removedColumn,array;

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		columnNumber = 0;
		expected = [[2,3],[5,6],[8,9]];
		expectedRemovedColumn = [1,4,7];
		removedColumn = snails.removeVertical(array, columnNumber);
		assert.deepEqual(array,  expected);
		assert.deepEqual(removedColumn,  expectedRemovedColumn);

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		columnNumber = 2;
		expected = [[1,2],[4,5],[7,8]];
		expectedRemovedRow = [3,6,9];
		removedColumn = snails.removeVertical(array, columnNumber);
		assert.deepEqual(array,  expected);
		assert.deepEqual(removedColumn,  expectedRemovedRow);
	});

	it('Check Vertical MoveAndSplice', function() {
		var scanDown,columnNumber,expected,expectedArray,actual;

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		scanDown = true;
		columnNumber = 0;
		expected = [1,4,7];
		expectedArray = [[2,3],[5,6],[8,9]];
		actual = snails.moveAndSpliceVertical(array, columnNumber, scanDown);
		assert.deepEqual(actual,  expected);
		assert.deepEqual(array,  expectedArray);

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});
		scanDown = false;
		columnNumber = 2;
		expected = [9,6,3];
		expectedArray = [[1,2],[4,5],[7,8]];
		actual = snails.moveAndSpliceVertical(array, columnNumber, scanDown);
		assert.deepEqual(actual,  expected);
		assert.deepEqual(array,  expectedArray);
	});

	it('Check Get Next Move Direction', function() {
		var actual, expected;

		expected = 'right';
		actual = snails.getMoveDirection(0);
		assert.equal(actual,  expected);
		expected = 'left';
		actual = snails.getMoveDirection(2);
		assert.equal(actual,  expected);

		expected = 1;
		actual = snails.getNextDirectionIndex(0);
		assert.equal(actual,  expected);
		expected = 2;
		actual = snails.getNextDirectionIndex(1);
		assert.equal(actual,  expected);
		expected = 3;
		actual = snails.getNextDirectionIndex(2);
		assert.equal(actual,  expected);
		expected = 0;
		actual = snails.getNextDirectionIndex(3);
		assert.equal(actual,  expected);
	});

	it('Check Get Start Position And Direction', function() {
		var expected,actual, direction, array, currentIndex, nextIndex;

		array  = inputArray1.map(function(arr) {
				return arr.slice();
			});

		// right
		currentIndex = snails.getMoveDirectionIndex();
		direction = snails.getMoveDirection(currentIndex);
		expected = {index: 0, direction: true};
		actual = snails.getStartPositionAndDirection(direction, array);
		assert.deepEqual(actual,  expected);

		// down
		snails.setNextStep();
		currentIndex = snails.getMoveDirectionIndex();
		direction = snails.getMoveDirection(currentIndex);
		expected = {index: 2, direction: true};
		actual = snails.getStartPositionAndDirection(direction, array);
		assert.deepEqual(actual,  expected);

		
		// left
		snails.setNextStep();
		currentIndex = snails.getMoveDirectionIndex();
		direction = snails.getMoveDirection(currentIndex);
		expected = {index: 2, direction: false};
		actual = snails.getStartPositionAndDirection(direction, array);
		assert.deepEqual(actual,  expected);

		// up
		snails.setNextStep();
		currentIndex = snails.getMoveDirectionIndex();
		direction = snails.getMoveDirection(currentIndex);
		expected = {index: 0, direction: false};
		actual = snails.getStartPositionAndDirection(direction, array);
		assert.deepEqual(actual,  expected);

		snails.setNextStep();
	});

	it('Check Snails', function() {
		var expected,actual;

		expected = [1,2,3,6,9,8,7,4,5];
		actual = snails.snail(inputArray1);
		assert.deepEqual(actual,  expected);

		expected = [1,2,3,4,8,12,15,14,13,12,9,5,6,7,11,10];
		actual = snails.snail(inputArray2);
		assert.deepEqual(actual,  expected);
	});
});