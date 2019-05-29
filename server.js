var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/userGet", (request, response) => handle(request.query, response) );
	
server.post("/userPost", (request, response) =>	handle(request.body, response) );
	
server.listen(3000);

function handle(user, response){
	console.log(user);
	for (var data in user)
		user[data] += '.modifiedByServer';
	response.send(JSON.stringify(user));
}

