(function(){
	'use strict';


var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var compression = require('compression');
var PORT=3000; 


app.use(compression());
app.use('/',express.static(__dirname));


server.listen(PORT,'0.0.0.0',function(){
	console.log("LISTEN on " + PORT);
});


})(); // use strict