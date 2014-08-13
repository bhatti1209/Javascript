var assert = require('assert'),
	codeWars = require('./../main'),
	da = new codeWars.DefaultArgs(),
	defaultArguments = da.defaultArguments;

describe('ISBN Tests: ', function() {
	function add(a,b) { return a+b;};
	function add2(x,y) { return x+y;};
	var timesFive = function () { var five = 5; return function (a) { return five * a; }; }();
	var closure_counter = (function accumulator() { var counter = 0; return function (x) { return counter += x; }; })();
	var id = function (id) { return id; };
	var five = function () { return 5; };
	function addComments( a, // comments
	b /* more comments */ ) { return a+b; };

	it('defaultArguments', function() {
		var add_, actual, expected;

		add_ = defaultArguments.call(da, add,{b:9});
		actual = add_(10);
		expected = 19;
		assert.equal(actual,  expected);
		actual = add_(10, 7);
		expected = 17;
		assert.equal(actual,  expected);
		actual = add_();
		expected = NaN;
		//assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, add_,{b:3, a:2});
		actual = add_(10);
		expected = 13;
		assert.equal(actual,  expected);
		actual = add_();
		expected = 5;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, add_,{c:3})
		actual = add_(10);
		expected = NaN;
		//assert.equal(actual,  expected);
		actual = add_(10,10);
		expected = 20;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, add,{b:9});
		actual = add_(10);
		expected = 19;
		assert.equal(actual,  expected);
		actual = add_(10, 5);
		expected = 15;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, add_,{b:3});
		actual = add_(10);
		expected = 13;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, add2,{y:9});
		actual = add_(10);
		expected = 19;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, timesFive,{n:5});
		actual = add_();
		expected = 25;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, closure_counter,{x:5});
		actual = add_();
		expected = 5;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, id,{id:'test'});
		actual = add_();
		expected = 'test';
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, id,{id:'test'});
		actual = add_(undefined);
		expected = undefined;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, five,{id:'test'});
		actual = add_(7);
		expected = 5;
		assert.equal(actual,  expected);

		add_ = defaultArguments.call(da, addComments,{b: 9});
		actual = add_(10);
		expected = 19;
		assert.equal(actual,  expected);
	});
});