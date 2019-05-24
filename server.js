var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/userGet", (request, response) => console.log(request.query) );

server.post("/userPost", (request, response) =>	console.log(request.body) );
	
server.listen(3000);



