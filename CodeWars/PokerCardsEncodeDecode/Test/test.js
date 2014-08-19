var assert = require('assert'),
	codeWars = require('./../main'),
	pokerHands = new codeWars.PokerHands();

describe('Poker hands tests: ', function() {
	it('Encode Test', function() {
		var inputArray, expected, actual;
		inputArray = [];
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check blank array');

		inputArray = null;
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check null');

		inputArray = {};
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check  object');

		inputArray = 'test';
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check  string');

		inputArray = ['Ac', 'Ks', '5h', 'Td', '3c'];
		expected = [0, 2 ,22, 30, 51];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check inputs');
	});

	it('Decode Test', function() {
		var inputArray, expected, actual;
		inputArray = [];
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check blank array');

		inputArray = null;
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check null');

		inputArray = {};
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check  object');

		inputArray = 'test';
		expected = [];
		actual = pokerHands.encode(inputArray);
		assert.deepEqual(actual,  expected, 'check  string');

		inputArray = [0, 51, 30, 22, 2];
		expected = ['Ac', '3c', 'Td', '5h', 'Ks'];
		actual = pokerHands.decode(inputArray);
		assert.deepEqual(actual,  expected, 'check inputs');

		inputArray = [50, 6, 13,30, 37];
		expected = ["7c", "Ad", "5h", "Qh", "Qs"];
		actual = pokerHands.decode(inputArray);
		assert.deepEqual(actual,  expected, 'check inputs');
	});
});