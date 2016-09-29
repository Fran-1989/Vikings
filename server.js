//code in the server side
var http = require('http');

//request is information about the user request
//response information that we send to the users
function onRequest(request, response) {
	console.log("A user made a request" + request.url);
	//We send the status code and header information about the type of data to users
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Here is some data");
	response.end();
}
//here we are listening for users to connect on port 8888
http.createServer(onRequest).listen(8888);
console.log("Server is now running...");