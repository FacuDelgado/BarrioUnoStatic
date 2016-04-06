'use strict';
require('dotenv').load();

var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

var homeController = require('./controllers/home');
var aboutUsController = require('./controllers/about-us');
var activitiesController = require('./controllers/activities');
var sendEmailController = require('./controllers/sendEmail');
var associateController = require('./controllers/associate');
var associateFormController = require('./controllers/associateForm');



var app = express();
var port = process.env.PORT || 8080;
app.locals.isHome = true;


app.engine('.hbs', expressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use('/', homeController);
app.use('/about-us', aboutUsController);
app.use('/activities', activitiesController);
app.use('/sendEmail', sendEmailController);
app.use('/associate', associateController);
app.use('/associateForm', associateFormController);

app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(port, function onListening() {
    
    console.log('Server listening on port ' + port);
});
