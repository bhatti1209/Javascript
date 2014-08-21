/*
Extend the String object to create a function that converts the value of the String to and from Base64 using the ASCII character set.

Usage:

// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64(); 

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();

http://www.codewars.com/kata/5270f22f862516c686000161/train/javascript
*/

String.prototype.toBase64 = function() {
	return new Buffer(this.toString()).toString('base64');
};

String.prototype.fromBase64 = function() {
	return new Buffer(this.toString(), 'base64').toString();
};