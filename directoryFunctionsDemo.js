//The synchronous creation is useful for when the function should run continuous. When there is nothing custom function to be performed.
//Asynchronous operation is used when a function is passed.

var fs = require('fs');

fs.mkdirSync('stuff');      //It will make the directory "stuff" synchronously.

fs.unlink('write.txt');     //will delete the file "write.txt" if it exists or will give an error.

fs.rmdirSync('stuff');      //It will remove the directory "stuff" synchronously.

fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
    console.log(data);
  });
});
