var assert = require('assert'),
	codeWars = require('./../main'),
	titleCase = new codeWars.TitleCase();

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