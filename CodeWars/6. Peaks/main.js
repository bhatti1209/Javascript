// In this kata, you will create an object that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
// For example, the array arr = [ 0 , 1 , 2 , 5 , 1 , 0 ] has a peak in position 3 with a value of 5 (arr[3] = 5)
// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
// Example: pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]) returns {pos:[3,7],peaks:[6,3]}
// All input arrays will be valid numeric arrays (although it could still be empty), so you won't need to validate the input.
// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
// Also, beware of plateaus !!! [1,2,2,2,1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1,2,2,2,1]) returns {pos:[1],peaks:[2]}

var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.pickPeaks = function (){
	};

	myNs.pickPeaks.prototype.pickPeaks = function (arr){
		var answer = { pos: [], peaks: [] };
		var totalLength = arr.length;
		if(totalLength <= 2)
			return answer;

		var actualArray = arr.splice(1, arr.length - 1);
		var splicedLength = 1;
		var findPeak = true;
		var findLow = false;
		var startValue = {pos: 1, peak: actualArray[0]};
		var previousValue = {pos: 1, peak: actualArray[0]};
		var adjustment = 1;

		actualArray.forEach(function (element, index, array){
			if(findPeak) {
				if(previousValue.peak > element){
					answer.pos.push(previousValue.pos);
					answer.peaks.push(previousValue.peak);

					findPeak = false;
					findLow = true;
					previousValue = { pos: splicedLength + index, peak: element};
				}
				else if(previousValue.peak !== element) {
					previousValue = { pos: splicedLength + index, peak: element};
				}

				if(index === (array.length - 1)) {
					if(previousValue.peak  !== element && (previousValue.pos-1) !== index && (previousValue.pos-1) !== 0) {
						console.log((previousValue.pos-1) + ':' + index);
						answer.pos.push(previousValue.pos);
						answer.peaks.push(previousValue.peak);
					}
				}
			}
			
			if(findLow){
				if(previousValue.peak < element){
					findPeak = true;
					findLow = false;
				}

				previousValue = { pos: splicedLength + index, peak: element};
			}
		});

		if(answer.pos.length === 0 && startValue.peak !== arr[0] && startValue.peak  < arr[arr.length-1] ){
			// condition for plateau
			answer.pos.push(startValue.pos);
			answer.peaks.push(startValue.peak);
		}

		return answer;
	};
})(codeWars);

var pp = new codeWars.pickPeaks();
console.log(pp.pickPeaks([]));
console.log('***************');
console.log(pp.pickPeaks([2]));
console.log('***************');
console.log(pp.pickPeaks([1,2]));
console.log('***************');
console.log(pp.pickPeaks([3,2,3,6,4,1,2,3,1,2,3]));
console.log('***************');
console.log(pp.pickPeaks([1,2,2,2,1]));
console.log('***************');
console.log(pp.pickPeaks([1,1,1,1,1]));
console.log('***************');
console.log(pp.pickPeaks([1, 2, 2, 2, 3]));
console.log('***************');
console.log(pp.pickPeaks([1, 2, 3, 1, 2, 2]));

module.exports = codeWars;