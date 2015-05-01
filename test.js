var http = require("http");
var fs=require("fs");
var path=require("path")

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-type": "text/plain"});
	response.end("essai");
}).listen(8010);