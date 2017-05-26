'use strict';
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello from Express.js\n');
});

app.listen(8080);
console.log('Node.js listening on port 8080');

var mongo = require('mongodb').MongoClient;
mongo.connect('mongodb://localhost:27017/test', function(err, db) {
	console.log("Connected to mongodb!");
	db.close(); 
}); 
