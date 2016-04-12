'use strict';
require('dotenv').load();

var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');
var mongoose = require('mongoose');

var homeController = require('./controllers/home');
var aboutUsController = require('./controllers/about-us');
var activitiesController = require('./controllers/activities');
var sendEmailController = require('./controllers/sendEmail');
var associateController = require('./controllers/associate');
var associateConfirmController = require('./controllers/associateConfirm');



mongoose.connect(process.env.MONGOLAB_URI);	
var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log("DB is connected - " + process.env.MONGOLAB_URI);     
});


var app = express();
var port = process.env.PORT || 8080;

app.engine('.hbs', expressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use('/', homeController);
app.use('/quienes-somos', aboutUsController);
app.use('/actividades', activitiesController);
app.use('/sendEmail', sendEmailController);
app.use('/asociate', associateController);
app.use('/asociacion-correcta', associateConfirmController);

app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(port, function onListening() {
    
    console.log('Server listening on port ' + port);
});
