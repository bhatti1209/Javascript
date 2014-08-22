/*
Write a function called sumIntervals that accepts an array of intervals, and 
returns the sum of all the interval lengths. Overlapping intervals should only 
be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The 
first value of the interval will always be less than the second value.

Interval example: 
[1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:
[
   [1,4],
   [7, 10],
   [3, 5]
]

The sum of the lengths of these intervals is 7. 
Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], 
which has a length of 4.

http://www.codewars.com/kata/sum-of-intervals
*/

var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.SumInterval = function (){
	};

	myNs.SumInterval.prototype.sumOfIntervals = function (inputArray){
		var result = 0;
		var sortedArray = this.sortArray(inputArray);
		var reduced = sortedArray.reduce(function (pv, cv, index){
			var lstIndex= (index !== 0) ? pv.length - 1: 0;
			if(index !== 0 && cv[0] < pv[lstIndex][1]){
				pv[lstIndex][1] = (cv[1] > pv[lstIndex][1]) ? cv[1]: pv[lstIndex][1];
			}
			else
				pv.push(cv);
			return pv;
		}, []);
		result = reduced.reduce(function (pvalue, cvalue){
			return pvalue + (cvalue[1] - cvalue[0]);
		}, 0);
		return result;
	};

	myNs.SumInterval.prototype.sortArray = function (inputArray){
		return inputArray.sort(this.sortFunction);
	};
	myNs.SumInterval.prototype.sortFunction = function (a, b){
		return a[0] - b[0];
	};
})(codeWars);

module.exports = codeWars;