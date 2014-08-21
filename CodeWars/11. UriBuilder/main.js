/*
Create a basic UriBuilder object that will be used specifically to build 
query params on an existing URI. It should support a params property and 
a build method. It will handle the URL having pre-existing params that need
 to be managed. The URL must be properly encoded (i.e. "a b" should be 
 encoded as "a%20b")

Examples of how the builder will be used:
var builder = new UriBuilder('http://www.codewars.com')
builder.params.page = 1
builder.params.language = 'javascript'

// new builder instance to demonstrate pre-existing params.
builder = new UriBuilder('http://www.codewars.com?page=1')
builder.params.page = 2
// should return 'http://www.codewars.com?page=2'
builder.build()

// if you delete params then they will disappear from the url string
delete builder.params.page
// should return 'http://www.codewars.com'
builder.build()

http://www.codewars.com/kata/51eead3461ccf7db04000017/solutions/javascript/best_practices
*/
var codeWars = codeWars || {};
(function codeWars (myNs) {
	myNs.UriBuilder = function (input){
		this.url = input;
		this.baseUrl = this.url.split('?')[0];
		this.params  = this.getExistingParams();
	};
	myNs.UriBuilder.prototype.build = function (){
		var res = (Object.keys(this.params).length > 0) ?
				this.baseUrl + '?' : this.baseUrl;
		for(var key in this.params){
			if(this.params.hasOwnProperty(key)){
				res += key.toString() + '=' + encodeURI(this.params[key]) + '&';
			}
		}
		return (Object.keys(this.params).length > 0) ?
				res.slice(0,-1) : res;
	};
	myNs.UriBuilder.prototype.getExistingParams = function (){
		var qp = this.url.split('?');
		var paramList = {};
		if(qp.length > 1){
			qp[1].split('&').map(function (value){
				var pair = value.split('=');
				paramList[pair[0]] = pair[1];
			});
		}
		return paramList;
	};
})(codeWars);

module.exports = codeWars;