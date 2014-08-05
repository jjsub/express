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
  res.render('index');
});

app.get('/cooltext', function(req, res){
  res.send('<h1>You</h1> <strong>are</strong> <em>cool</em>!');
});

app.get('/nope', function(req, res){
  res.send('nope');
});

app.get('/yep', function(req, res){
  res.send('yep');
});

app.get('/add/:a/:b/:c/:d', function(req, res){
  var a = parseInt(req.params.a);
  var b = parseInt(req.params.b);
  var c = parseInt(req.params.c);
  var d = parseInt(req.params.d);
  var sum = a + b + c + d;
  res.render('sum', {title: 'My awesome website', sum: sum});
});

app.listen(3000, function(){
  console.log('Node is running on port 3000');
});

