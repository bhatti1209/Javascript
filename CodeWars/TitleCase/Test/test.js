var assert = require('assert'),
	codeWars = require('./../TitleCase'),
	titleCase = new codeWars.TitleCase();

var sampleInput1 = 'a clash of KINGS';
var sampleInput2 = 'THE WIND IN THE WILLOWS';
var sampleInput3 = 'the quick brown fox';
var output;

describe('Title Cases Tests: ', function() {
	it('Check First Letter isUpper', function() {
		output = titleCase.capFirstChar(sampleInput1.split(' ')[0]);
		assert.equal(output[0], 'A');
		output = titleCase.capFirstChar(sampleInput2.split(' ')[0]);
		assert.equal(output[0], 'T');
		output = titleCase.capFirstChar(sampleInput3.split(' ')[0]);
		assert.equal(output[0], 'T');
	});
});