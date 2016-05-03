var fs = require('fs')
  , express = require('express')
  , bodyParser = require('body-parser')
  , serveStatic = require('serve-static');
var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(serveStatic('.'));
app.use(express.static('public'));

app.post('/question', function(req, res) {
  try {
    var str = req.body.quest + '.json';
    var a = fs.readFileSync(req.body.quest + '.json', 'utf8');
    res.json(a);
  } catch (error){
    if (error.code === 'ENOENT') {
      res.statusCode = 404;
      res.statusMessage = 'Not found';
      console.log(error);
    } else {
      // throw error;
      console.log(error);
    }
  }
  res.end();
});

app.listen(port, function() {
    console.log("listening http on port " + port)
});