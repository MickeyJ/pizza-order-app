var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.locals.options = require('./options.json');

console.log();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
  res.render('index', {
    title: 'Pizza Stream',
    slogan: 'You like PIZZA!'

  })
});

var port = 9000;

app.listen(port, function(){
  console.log('listening on port: '+ port)
});