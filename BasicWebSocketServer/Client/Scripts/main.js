var connection;
var val = 0;
$(document).ready(function (){
	connection = new WebSocket("ws://"+window.location.hostname+":8081");
	connection.binaryType = 'arraybuffer';

	connection.onopen = function () {
		console.log("Connection opened");
	};
	connection.onclose = function (e) {
		console.log(e);
	};
	connection.onerror = function (e) {
		console.error(e);
	};
	connection.onmessage = function (event) {
		if(typeof(event.data) == "string"){
			var div = document.createElement("div");
			div.textContent = event.data;
			document.body.appendChild(div);
		}
		else if(event.data instanceof ArrayBuffer){
			val += event.data.byteLength;
			alert(val);
		}
	};

	$('#btnSend').click (function (e){
		sendMessage(e);
	});
});

$(window).unload(function(){
	//connection.close();
}); 

var sendMessage = function (event){
	var msg = document.getElementById("msg");
	if (msg.value)
		connection.send(msg.value);
	msg.value = "";
};