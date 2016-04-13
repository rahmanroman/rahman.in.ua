var server = require('node-http-server');
var path = require('path');

server.deploy({
    port: process.env.PORT || 8080,
    root: path.join(__dirname, '/public')
});

//var http    = require('http');
//var util	= require('util');
//var path	= require('path');
//
//var express	= require('express');
//
//var favicon			= require('serve-favicon');
//var compression		= require('compression');
//
//var app	= express();
//var server	= http.createServer(app);
//
//app.set('port', process.env.PORT || 6669);
//app.set('trust proxy', true);
//
////app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(compression());
//
//// Core handlers
//app.use(function(err, req, res, next){
//	console.error(err);
//	res.send(500, 'Something wrong');
//});
//
//process.on('uncaughtException', function (exception) {
//	console.error(exception.stack);
//});
//
//server.listen(app.get('port'));
//
