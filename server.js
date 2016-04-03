var fs = require('fs')
  , express = require('express')
  , bodyParser = require('body-parser')
  , serveStatic = require('serve-static');
var app = express();
var port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(serveStatic('.'));
app.use(express.static('src'));

app.listen(port, function() {
    console.log("listening http on port " + port)
});