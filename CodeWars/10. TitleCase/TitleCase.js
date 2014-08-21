String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index + 1);
};

var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.TitleCase = function (){

	};

	myNs.TitleCase.prototype.titleCase = function (title, minorWords){
		var titleArray = title.split(' ');

		titleArray[0] = this.capFirstChar(titleArray[0]);

		return titleArray.join(' ');
	};

	myNs.TitleCase.prototype.capFirstChar = function (word){
		return word.replaceAt(0, word[0].toUpperCase());
	};
})(codeWars);

module.exports = codeWars;