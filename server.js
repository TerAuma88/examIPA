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

app.post('/question', function(req, res) {
  var a = fs.readFileSync(req.body.quest + '.json', 'utf8');
  // console.log(a);
  res.json(a);
});

app.listen(port, function() {
    console.log("listening http on port " + port)
});