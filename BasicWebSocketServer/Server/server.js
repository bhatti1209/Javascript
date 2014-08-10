var ws = require("nodejs-websocket")
var fs = require('fs')

var server = ws.createServer(function (connection) {
	connection.on("text", function (str) {
		connection.sendText('sending binary data next');

		fs.readFile('./SampleData/test.txt', 'binary', function(err, data) {
			if (err) throw err;
			connection.beginBinary().end(data);
		});
	});
})
server.listen(8081);