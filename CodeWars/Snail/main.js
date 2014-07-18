var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.snails = function (){
	};

	myNs.snails.prototype.snail = function (inputArray){
		return [];
	};

	myNs.snails.prototype.removeHorizontal = function (inputArray, rowNumber){
		var removedRow = inputArray.splice(rowNumber, 1);
		return removedRow[0];
	};

	myNs.snails.prototype.moveAndSpliceHorizontal = function (inputArray, rowNumber, scanRight){
		var row = this.removeHorizontal(inputArray, rowNumber).slice();
		if(!scanRight)
			row = row.reverse();
		return row;
	};

	myNs.snails.prototype.removeVertical = function (inputArray, columnNumber){
		var removedColumn = [];

		for(var q=0;q<inputArray.length;q++){
			var item = inputArray[q].splice(columnNumber, 1);
			removedColumn.push(item[0]);
		}
		
		return removedColumn;
	};

	myNs.snails.prototype.moveAndSpliceVertical = function (inputArray, columnNumber, scanDown){
		var column = this.removeVertical(inputArray, columnNumber);

		if(!scanDown)
			column = column.reverse();
		return column;
	};

	
})(codeWars);

module.exports = codeWars;