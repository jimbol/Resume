'use strict';

let express = require('express');
let app = express();

let http = require('http').Server(app);
http.listen(3000, function(){
  console.log('Listening on port 3000');
});

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.get('/assets/*', function (req, res) {
  res.sendfile('assets/' + req.params[0]);
});
