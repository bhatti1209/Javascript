$(document).ready(function(){
	var value = "test13";
	
	$('#btnTest').click(function (){
		alert(value);
	});

	window.setInterval(function (){
		$('#testDiv').text(value);
	}, 100);
});