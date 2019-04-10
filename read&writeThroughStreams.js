//Reading and wrting through streams, data is collected as Buffer(chunks) and sent through stream.
//

var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');      //utf8 encoding for data to be read in defined way, readMe.txt is the file containing data to be read, Instead of __dirname, whole of the file path can be added.
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');     //writeStream is created using createWriteStream and saved via writeStream into writeMe.txt

//Option 'A' to write the read data ------------------------
readStream.on('data', funtion(chunk){     //through the stream, data is sent in small (chunks) Buffer. Buffer is then sent on stream.
  console.log('new chunk received');      
  console.log(chunk);     
  writeStream.write(chunk);     //it writes the chunk of data into the writeMe.txt file through writeStream.
});
//----------------------------------------------------------


//Option 'B' to write the data through 'pipe' --------------
readStream.pipe(writeStream)
//----------------------------------------------------------

// readMe.txt file will have the data which user needs to read. It will reside in the same folder of the .js file.
