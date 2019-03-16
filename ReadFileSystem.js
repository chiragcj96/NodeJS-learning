var fs = require('fs');
var fi = 4.5


var readMe = fs.readFileSync('readME.txt', 'utf8');
console.log(readMe);
console.log(fi);

fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log(data);
  console.log(fi);

});
