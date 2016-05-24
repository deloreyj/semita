var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname + '/public'));

http.createServer(app).listen(26937, function() {
	console.log('server listening on port 26937');
});