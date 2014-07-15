function getPINs(observed) {
  var adjKeys = {
   "1" : ["1", "2", "4"],
   "2" : ["2", "1", "3"],
   "3" : ["3", "2", "6"],
   "4" : ["4", "1", "7", "5"],
   "5" : ["5", "2", "8", "4", "6"],
   "6" : ["6", "3", "9", "5"],
   "7" : ["7", "4", "8"],
   "8" : ["8", "5", "0", "7", "9"],
   "9" : ["9", "8", "6"],
   "0" : ["0", "8"],
 };
 
 var keys = observed.split('');
 var keyArrays = [];
 keys.map(function (current, index){
   keyArrays.push(adjKeys[current]);  
 });

looper(keyArrays, []);

return total;
}

var total = [];

function looper(array, prevArray){
  if(array.length === 1){
    var arrayToUse = array[0];
    for(var q=0;q<arrayToUse.length;q++){
      var temp = prevArray.slice();
      temp.push(arrayToUse[q]);
      total.push(formCombination(temp));
    }
  }
  else{
    for(var l=0;l<array[0].length;l++){
      var storeArray = prevArray.slice();
      storeArray.push(array[0][l]);
      looper(array.slice(1), storeArray);
    }
  }
}

function formCombination(valueArray){
  return valueArray.join('');
}

getPINs('11');
console.log(total.sort());