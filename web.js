var express = require('express');

var app = express.createServer(express.logger());

var readFromFile = function(){
    var fs = require('fs');
    var inputFile = "index.html";
    var buffer = new Buffer(fs.readFileSync(inputFile, "utf8"));
    return buffer.toString();
}

app.get('/', function(request, response) {
  response.send(readFromFile());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

