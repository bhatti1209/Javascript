var assert = require('assert'),
	codeWars = require('./../main');

describe('UriBuilder Tests: ', function() {
	it('base64 encode', function() {
		var actual = 'this is a string!!'.toBase64();
		var expected = 'dGhpcyBpcyBhIHN0cmluZyEh';
		assert.equal(actual, expected, "Should convert to base64.");
	});
	it('base64 decode', function() {
		var actual = 'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
		var expected = 'this is a string!!';
		assert.equal(actual, expected, "Should convert back to base64.");
	});
});