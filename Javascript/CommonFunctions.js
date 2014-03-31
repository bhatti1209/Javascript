var myNameSpace = myNameSpace || {};
myNameSpace.Common = myNameSpace.Common || {};

(function CommonMathOperations (myNs) {
	var singleton;

	myNs.CommonMathOperations = function (){
		// private variables go here
		var self = this;
	};

	myNs.CommonMathOperations.prototype.double = function(val) {
		return val * 2;
	};

	myNs.CommonMathOperations.getInstance = function (){
		if(!singleton){
			singleton = new myNs.CommonMathOperations();
		}
		return singleton;
	}
})(myNameSpace.Common);

module.exports = myNameSpace.Common.CommonMathOperations.getInstance();