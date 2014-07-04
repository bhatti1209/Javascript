function titleCase(title, minorWords) {
	var titleArray = title.split(' ');
	
	var s = titleArray[0];
	var index = 0;
	s = s.substr(0, index) + titleArray[0][0].toUpperCase() + s.substr(index + 1);
	titleArray[0] = s;

	console.log(s);

	return titleArray.join(' ');
}

module.exports = titleCase;