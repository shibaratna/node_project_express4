/*
Author: Shiba R. Tamrakar
Date: Jan 30, 2015
Script: Express sample file (basic)
*/


//include express module
var express = require('express');
	app = express();

//calling / (root route) with get method and return 'hello world'
app.get('/',function(req,res){
	res.send('hello world');

});

//listening in port 5000
app.listen(5000, function(){
	console.log("listening on port 5000")
});