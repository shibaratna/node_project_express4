/*
Author: Shiba R. Tamrakar
Date: Jan 30, 2015
Script: Express sample file (basic)
*/

//npm install express
//npm install body-parser


//include express module
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//using bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var names=[];
//Get request
//calling / (root route) with get method and return 'hello world'

app.all('/',function(req,res,next){
	console.log('from all');
	next(); // calls next router

});

app.get('/',function(req,res){
	res.render('index.jade',{ names: names });

});

//post
app.post('/',function(req,res){
	names.push(req.body.name);
	res.redirect('/');

});

//listening in port 5000
app.listen(5000, function(){
	console.log("listening on port 5000")
});