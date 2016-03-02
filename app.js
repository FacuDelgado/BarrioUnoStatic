'use strict';

var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

// var addController = require('./controllers/add');
var homeController = require('./controllers/home');
// var reviewController = require('./controllers/review');

var app = express();
var port = process.env.PORT || 3000;


// var db = require('./libs/dbConnection.js');

// db.init(function onError(error) {
//     console.log(error);
// }, 
//     function onSuccess() {
//     console.log("Db connection OK!");
// });



app.engine('.hbs', expressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use('/', homeController);
// app.use('/add', addController);
// app.use('/review', reviewController);

app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(port, function onListening() {
    
    console.log('Server listening on port ' + port);
});