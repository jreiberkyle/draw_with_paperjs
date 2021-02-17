// app.js

const express = require('express');
const app = new express();
var path = require('path');

var static_dir = express.static(__dirname + '/public');
app.use(static_dir);
app.use('/public', static_dir);

var index = path.join(__dirname + '/index.html');

app.get('/', function(req, res) {
  res.sendFile(index);
});

// app.get('/heart', function(req, res) {
  // var filename = 'svg/heart.svg';
  // res.render(index, {filename: filename});
// });

// Start the server
app.listen(8080);
console.log('Node server running on port 8080');  
