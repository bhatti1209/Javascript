var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.snails = function (){
		this.currentDirection = ['right', 'down', 'left', 'up'];
		this.currentDirectionIndex = 0;
		this.result = [];
	};

	myNs.snails.prototype.snail = function (inputArray){
		this.result = [];
		this.currentDirectionIndex = 0;
		this.buildSnail(inputArray);

		return this.result;
	};

	myNs.snails.prototype.buildSnail = function (inputArray){
		var currentIndex, direction, nextIndex, details,output;

		if(inputArray.length !== 0){
			currentIndex = this.getMoveDirectionIndex();
			direction = this.getMoveDirection(currentIndex);
			details = this.getStartPositionAndDirection(direction, inputArray);

			if(direction === 'right' || direction === 'left'){
				output = this.moveAndSpliceHorizontal(inputArray, details.index, details.direction);
			}
			else{
				output = this.moveAndSpliceVertical(inputArray, details.index, details.direction);
			}

			var context = this;
			output.forEach(function (value){
				context.result.push(value);
			});

			this.setNextStep();

			this.buildSnail(inputArray);
		}
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

	myNs.snails.prototype.getMoveDirection = function (index){
		return this.currentDirection[index];
	};

	myNs.snails.prototype.getMoveDirectionIndex = function (){
		return this.currentDirectionIndex;
	};

	myNs.snails.prototype.setMoveDirectionIndex = function (index){
		this.currentDirectionIndex = index;
	};

	myNs.snails.prototype.getNextDirectionIndex = function (currentIndex){
		var nextIndex;
		if(currentIndex === 3)
			nextIndex = 0;
		else
			nextIndex = currentIndex + 1;

		return nextIndex;
	};

	myNs.snails.prototype.getStartPositionAndDirection = function (direction, array){
		var result = {index: 0, direction: true};

		if(direction === 'right'){
			result.index = 0;
			result.direction = true;
		}
		else if(direction === 'down'){
			result.index = array[0].length - 1;
			result.direction = true;
		}
		else if(direction === 'left'){
			result.index = array[0].length - 1;
			result.direction = false;
		}
		else if(direction === 'up'){
			result.index = 0;
			result.direction = false;
		}

		return result;
	};

	myNs.snails.prototype.setNextStep = function (){
		var currentIndex, direction, nextIndex;
		currentIndex = this.getMoveDirectionIndex();
		direction = this.getMoveDirection(currentIndex);
		nextIndex = this.getNextDirectionIndex(currentIndex);
		this.setMoveDirectionIndex(nextIndex);
	};
})(codeWars);

module.exports = codeWars;