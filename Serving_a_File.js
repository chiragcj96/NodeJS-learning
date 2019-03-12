// reads a file (viewTextInBrowser.txt) located in a sub folder/directory called "views"
// creates a server listening for HTTP requests on port 8080
// a request sent to the server (http://127.0.0.1), should display contents that was read from the file.

var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var readMe = fs.readFile('./public/views/viewTextInBrowser.txt', 'utf8', function(err,data){
    if(err) throw err;

    res.end(data);
  });

});

server.listen(8080, '127.0.0.1');
console.log('yo dawgs, now listening to port 8080');
