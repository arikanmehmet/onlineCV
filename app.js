
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var mongoose = require('mongoose');

var profileRoute = require('./routes/profileRoute.js');

var urlString = 'mongodb://localhost/profiledb';

mongoose.connect(urlString,function(err,res){
   if(err){
       console.log('Error while connecting to ' + urlString + " . ERROR: " + err);
   }else{
       console.log('Succeeded connected to ' + urlString);
   }
});

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/profile/:username', profileRoute.profilePage);
app.get('/profile/:username/:jadeTemplate.html', profileRoute.profilePage);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
