String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index + 1);
};

var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.TitleCase = function (){

	};

	myNs.TitleCase.prototype.titleCase = function (title, minorWords){
		var titleArray = title.split(' ');
		var minorWordArray = (minorWords) ? minorWords.toLowerCase().split(' ') : [];

		for(var q=0;q<titleArray.length;q++){
			if(titleArray[q]){
				var isMinor = isMinorWord(titleArray[q], minorWordArray);
				if(q === 0 || !isMinor){
					titleArray[q] = capFirstChar(titleArray[q].toLowerCase());
				}
				else{  
					titleArray[q] = titleArray[q].toLowerCase();
				}
			}
		}

		return titleArray.join(' ');
	};

	var isMinorWord = function (wordToCheck, minorWordList){
		return (minorWordList.indexOf(wordToCheck.toLowerCase()) !== -1);
	};
	var capFirstChar = function (word){
		return word.replaceAt(0, word[0].toUpperCase());
	};
})(codeWars);

module.exports = codeWars;