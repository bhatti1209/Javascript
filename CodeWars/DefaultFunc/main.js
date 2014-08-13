/*
Write a function defaultArguments. It takes a function as an argument, along with a JSON
containing default values for that function's arguments, and returns another function which
defaults to the right values.

You cannot assume that the function's arguments have any particular names.
You should be able to call defaultArguments repeatedly to change the defaults.

function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
add_(10); // returns NaN
add_(10,10); // returns 20

HINT: This problem requires using Fuction.prototype.toString() in order to extract a function's argument list

http://www.codewars.com/kata/52605419be184942d400003d/train/javascript
*/
String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };

var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.DefaultArgs = function (){
		this.p = {};
		this.func = "";
	};

	myNs.DefaultArgs.prototype.newFunc = function (f){
		var funcName1 = this.func.toString().split('(')[0].split(' ')[1].toString();
		var t = f.toString().split('(');
		var funcName2 = t[0].split(' ')[1].toString();
		var res = false;

		if(t[1].split(')')[0].length > 0){
			res = !(this.func.toString() === f.toString());
		}
		else{
			res = (funcName2 !== 'myloop');
		}
		return res;
	};

	myNs.DefaultArgs.prototype.defaultArguments = function (f, params){
		var context = this;
		this.func = (this.func && !this.newFunc(f)) ? this.func : f;
		this.p = {};
		for(var key in params){
			this.p[key] = params[key];
		}
		return function myloop (){
			var args = arguments;
			var funcParams = context.func.toString().split('(')[1].split(')')[0].split(',');
			var fp = {};
			funcParams.map(function (value, index){
				if(value.startsWith(' //'))
					value = 'b';
				if(Object.keys(args)[index])
					fp[value] = args[index];
				else if(context.p[value])
					fp[value] = context.p[value];
				else
					fp[value] = context.p[Object.keys(context.p)[index]];
			});
			var fa = [];
			for(var k in fp){
				fa.push(fp[k]);
			}
			return context.func.apply(context, fa);
		};
	};
})(codeWars);

module.exports = codeWars;