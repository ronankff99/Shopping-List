//Written 17/09/2020 by Ronan O'Keeffe
//The intention of this project is to improve my familiarity with Node

//Requires
var express = require('express');
var listController = require('./controllers/listController.js');
var app = express();
var portNo = 3000;

//Set up templating
app.set('view engine', 'ejs');

//Serve static files
app.use(express.static('./public'))

listController(app);
app.listen(portNo);
