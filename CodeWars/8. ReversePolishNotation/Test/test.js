var assert = require('assert'),
	codeWars = require('./../main'),
	rp = new codeWars.ReversePolish(),
	calc = rp.calc;

describe('ISBN Tests: ', function() {
	it('isValidISBN10', function() {
		assert.equal(calc.call(rp, ""), 0, "Should work with empty string");
		assert.equal(calc.call(rp, "1 2 3"), 3, "Should parse numbers");
		assert.equal(calc.call(rp, "1 2 3.5"), 3.5, "Should parse float numbers");
		assert.equal(calc.call(rp, "1 3 +"), 4, "Should support addition");
		assert.equal(calc.call(rp, "1 3 *"), 3, "Should support multiplication");
		assert.equal(calc.call(rp, "1 3 -"), -2, "Should support subtraction");
		assert.equal(calc.call(rp, "4 2 /"), 2, "Should support division");
		assert.equal(calc.call(rp, "5 1 2 + 4 * + 3 -"), 14, "Test multiple.");
	});
});