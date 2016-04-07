'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var router = express.Router();


router.get('/', function (req, res) {
    
     res.render('associateForm');
});

router.post('/', bodyParser.urlencoded({ extended: false }), 
	function (req, res, next) {
	

 var transporter = nodemailer.createTransport({
        auth: {
            pass: process.env.EMAIL_PASS,
            user: process.env.EMAIL_ADDRESS,
        },
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
    });
    var mailOptions = {
        from: "Contacto <facundod@sdfbarriouno.com.ar>",
        html: "Nombre: " + req.body.fullName + "</br> Email: " + req.body.email + "</br> Direccion: " + req.body.address + "</br> Telefono: " + req.body.tel + "</br> Mensaje: " + req.body.message , 
        subject: "Nueva peticion de asociacion",
        to: "facundodelgado.1@gmail.com",
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        }
        console.log("Message sent: " + info.response);
    });
	
	res.redirect('/');


});


module.exports = router;