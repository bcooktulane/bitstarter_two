var express = require('express');
var fs = require('fs');
var htmlfile = "jetstrap-project/home.html";
var about_html = 'jetstrap-project/about.html';
var contact_html = 'jetstrap-project/contact.html';

var app = express.createServer(express.logger());
app.use('/assets', express.static('jetstrap-project/assets'));

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

app.get('/about', function(req, res) {
    res.send(fs.readFileSync(about_html).toString());
});

app.get('/contact', function(reqq, ress) {
    ress.send(fs.readFileSync(contact_html).toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
