var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');

var buff = new Buffer(fs.readFileSync('screen-5371e3cc0f.html','utf8'));
  response.send(buff.toString());    
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
