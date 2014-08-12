var assert = require('assert'),
	codeWars = require('./../main');

describe('UriBuilder Tests: ', function() {
	it('build test - Add with encoding Url Build', function() {
		var builder = new codeWars.UriBuilder('http://www.codewars.com?page=1');
		builder.params.page = "a b";

		var actual = builder.build();
		var expected = 'http://www.codewars.com?page=a%20b';
		assert.equal(actual, expected, "Should add encoded to Url");
	});
	it('build test - Url Build', function() {
		var builder = new codeWars.UriBuilder('http://www.codewars.com');
		builder.params.page = 1;
		builder.params.language = 'javascript';

		var actual = builder.build();
		var expected = 'http://www.codewars.com?page=1&language=javascript';
		assert.equal(actual, expected, "Should build the Url");
	});
	it('build test - Pre-existing Url Build', function() {
		var builder = new codeWars.UriBuilder('http://www.codewars.com?page=1');
		builder.params.page = 2;

		var actual = builder.build();
		var expected = 'http://www.codewars.com?page=2';
		assert.equal(actual, expected, "Should replace the pre-existing value in Url");
	});
	it('build test - Delete from Url Build', function() {
		var builder = new codeWars.UriBuilder('http://www.codewars.com?page=1');
		delete builder.params.page;

		var actual = builder.build();
		var expected = 'http://www.codewars.com';
		assert.equal(actual, expected, "Should delete from Url");
	});
});