var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var about_html = 'about.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

app.get('/about', function(req, res) {
    res.send(fs.readFileSync(about_html).toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
