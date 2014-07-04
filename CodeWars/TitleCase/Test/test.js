var assert = require('assert'),
	titleCase = require('./../TitleCase');

var sampleInput1 = 'a clash of KINGS';
var sampleInput2 = 'THE WIND IN THE WILLOWS';
var sampleInput3 = 'the quick brown fox';

describe('Title Cases Tests: ', function() {
	it('Check First Letter isUpper', function() {
		var output = titleCase(sampleInput1, '');

		assert.equal(output[0], 'A');
		// assert.equal(output[0], 'T');
		// assert.equal(output[0], 'T');
	});
});