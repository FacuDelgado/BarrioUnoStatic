'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var router = express.Router();
// getting-started.js
var mongoose = require('mongoose');


router.get('/', function (req, res) {
    
     res.render('associateForm');
});

router.post('/', bodyParser.urlencoded({ extended: false }), 
	function (req, res, next) {

    mongoose.connect(process.env.MONGOLAB_URI);	
    var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
        console.log("DB is connected - " + process.env.MONGOLAB_URI);     

        var socioSchema = mongoose.Schema({
            familia: String,
            direccion: String,
            telefono1: String,
            nombre1: String,
            email1: String,
            birth1: String,
            dni1: String,
            nombre2: String,
            email2: String,
            birth2:String,
            dni2:String,
            telefono2: String
        });

        var sociosModel = mongoose.model('socio', socioSchema);

        var socioInstance = new sociosModel();
        socioInstance.familia = 'apellido Test';
        socioInstance.save(function (err) {
          if (err) return handleError(err);
          console.log("grabamos el dato");
        });
    });


 // var transporter = nodemailer.createTransport({
 //        auth: {
 //            pass: process.env.EMAIL_PASS,
 //            user: process.env.EMAIL_ADDRESS,
 //        },
 //        host: "smtp.zoho.com",
 //        port: 465,
 //        secure: true,
 //    });
 //    var mailOptions = {
 //        from: "Contacto <facundod@sdfbarriouno.com.ar>",
 //        html: "Nombre: " + req.body.fullName + "</br> Email: " + req.body.email + "</br> Direccion: " + req.body.address + "</br> Telefono: " + req.body.tel + "</br> Mensaje: " + req.body.message , 
 //        subject: "Nueva peticion de asociacion",
 //        to: "facundodelgado.1@gmail.com",
 //    };


 //    transporter.sendMail(mailOptions, function (error, info) {
 //        if (error) {
 //            console.log(error);
 //            res.redirect('/');
 //        }
 //        console.log("Message sent: " + info.response);
 //    });
	
	res.redirect('/');


});


module.exports = router;