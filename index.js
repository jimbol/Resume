'use strict';

let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

if(process.env.PRODUCTION){
  port = process.env.PORT;
}

let http = require('http').Server(app);
http.listen(port, function(){
  console.log('Listening on port ' + port);
});

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.get('/assets/*', function (req, res) {
  res.sendfile('assets/' + req.params[0]);
});
