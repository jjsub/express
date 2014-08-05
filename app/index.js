'use strict';

var express = require('express');
var morgan = require('morgan');

var app = express();
var logger = morgan();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(logger);
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/cooltext', function(req, res){
  res.send('You are cool!');
});

app.get('/nope', function(req, res){
  res.send('nope');
});

app.get('/yep', function(req, res){
  res.send('yep');
});

app.listen(3000, function(){
  console.log('Node is running on port 3000');
});

