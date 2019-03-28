var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

readStream.on('data', funtion(chunk){
  console.log('new chunk received');
  console.log(chunk);
  
});
