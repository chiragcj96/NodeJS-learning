var http = require('http');      //storing the module "http" in a variable. Module "http" is used to create a server.

ver server = http.createServer();     //This creates the server which we needed but it will not perform anything right now.

//Now, creating a server which performs(responds to your requests)


var http = require('http');      

ver server1 = http.createServer1(funtion(req, res){
  //console.log('the url provided is :' + req.url);     //It is optional to print the user-typed url to the server
  res.writeHead(200, {'Content-Type': 'text/Plain'});     //It tells the content - type of the response 
  res.end('Your server created successfully');      //The message you get onnyour browser when you request
}); 

server.listen(8080, '127.0.0.1');     //127.0.0.1 is the default local host IP. Using the port number 8080
console.log('listening to Port 8080')     //It prints this message to the console/terminal/server-side
