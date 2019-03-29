var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');      //utf8 encoding for data to be read in defined way, readMe.txt is the file containing data to be read, Instead of __dirname, whole of the file path can be added.
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');     //writeStream is created using createWriteStream and saved via writeStream into writeMe.txt

readStream.on('data', funtion(chunk){     //through the stream, data is sent in small chunks, getting collected into a Buffer. Buffer is then sent on stream.
  console.log('new chunk received');      
  console.log(chunk);     
  writeStream.write(chunk);     //it writes the chunk of data into the writeMe.txt file through writeStream.
  
});
