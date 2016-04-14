'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var mongoose = require('mongoose');

router.get('/', function (req, res) {
    
     res.render('associate');
});

router.post('/', bodyParser.urlencoded({ extended: false }), 
	function (req, res, next) {

        var socioSchema = mongoose.Schema({
            familia: String,
            tipoSocio: String,
            direccion: String,
            telefono1: String,
            nombre1: String,
            apellido1: String,
            email1: String,
            nacimiento1: String,
            dni1: String,
            nombre2: String,
            apellido2: String,
            email2: String,
            nacimiento2:String,
            dni2:String,
            telefono2: String,
            nombre3: String,
            apellido3: String,
            email3: String,
            nacimiento3:String,
            dni3:String,
            telefono3: String,
            nombre4: String,
            apellido4: String,
            email4: String,
            nacimiento4:String,
            dni4:String,
            telefono4: String,
            nombre5: String,
            apellido5: String,
            email5: String,
            nacimiento5:String,
            dni5:String,
            telefono5: String,
            nombre6: String,
            apellido6: String,
            email6: String,
            nacimiento6:String,
            dni6:String,
            telefono6: String,
            nombre7: String,
            apellido7: String,
            email7: String,
            nacimiento7:String,
            dni7:String,
            telefono7: String,
            nombre8: String,
            apellido8: String,
            email8: String,
            nacimiento8:String,
            dni8:String,
            telefono8: String,
            nombre9: String,
            apellido9: String,
            email9: String,
            nacimiento9:String,
            dni9:String,
            telefono9: String
        });

        var sociosModel = mongoose.model('socio', socioSchema);

        var socioInstance = new sociosModel();

        socioInstance.familia = req.body.familyName;
        socioInstance.tipoSocio = req.body.tipoSocio;
        socioInstance.direccion = req.body.address;
        socioInstance.telefono1 = req.body.tel;
        socioInstance.nombre1 = req.body.name1;
        socioInstance.apellido1 = req.body.lastName1;
        socioInstance.email1 = req.body.email;
        socioInstance.nacimiento1 = req.body.birth1;
        socioInstance.dni1 = req.body.dni1;

        socioInstance.nombre2 = req.body.name2;
        socioInstance.apellido2 = req.body.lastName2;
        socioInstance.email2 = req.body.email2;
        socioInstance.nacimiento2 = req.body.birth2;
        socioInstance.dni2 = req.body.dni2;
        socioInstance.telefono2 = req.body.tel2;

        socioInstance.nombre3 = req.body.name3;
        socioInstance.apellido3 = req.body.lastName3;
        socioInstance.email3 = req.body.email3;
        socioInstance.nacimiento3 = req.body.birth3;
        socioInstance.dni3 = req.body.dni3;
        socioInstance.telefono3 = req.body.tel3;

        socioInstance.nombre4 = req.body.name4;
        socioInstance.apellido4 = req.body.lastName4;
        socioInstance.email4 = req.body.email4;
        socioInstance.nacimiento4 = req.body.birth4;
        socioInstance.dni4 = req.body.dni4;
        socioInstance.telefono4 = req.body.tel4;

        socioInstance.nombre4 = req.body.name4;
        socioInstance.apellido4 = req.body.lastName4;
        socioInstance.email4 = req.body.email4;
        socioInstance.nacimiento4 = req.body.birth4;
        socioInstance.dni4 = req.body.dni4;
        socioInstance.telefono4 = req.body.tel4;

        socioInstance.nombre5 = req.body.name5;
        socioInstance.apellido5 = req.body.lastName5;
        socioInstance.email5 = req.body.email5;
        socioInstance.nacimiento5 = req.body.birth5;
        socioInstance.dni5 = req.body.dni5;
        socioInstance.telefono5 = req.body.tel5;

        socioInstance.nombre6 = req.body.name6;
        socioInstance.apellido6 = req.body.lastName6;
        socioInstance.email6 = req.body.email6;
        socioInstance.nacimiento6 = req.body.birth6;
        socioInstance.dni6 = req.body.dni6;
        socioInstance.telefono6 = req.body.tel6;

        socioInstance.nombre7 = req.body.name7;
        socioInstance.apellido7 = req.body.lastName7;
        socioInstance.email7 = req.body.email7;
        socioInstance.nacimiento7 = req.body.birth;
        socioInstance.dni7 = req.body.dni7;
        socioInstance.telefono7 = req.body.tel7;

        socioInstance.nombre8 = req.body.name8;
        socioInstance.apellido8 = req.body.lastName8;
        socioInstance.email8 = req.body.email8;
        socioInstance.nacimiento8 = req.body.birth8;
        socioInstance.dni8 = req.body.dni8;
        socioInstance.telefono8 = req.body.tel8;

        socioInstance.nombre9 = req.body.name9;
        socioInstance.apellido9 = req.body.lastName9;
        socioInstance.email9 = req.body.email9;
        socioInstance.nacimiento9 = req.body.birth9;
        socioInstance.dni9 = req.body.dni9;
        socioInstance.telefono9 = req.body.tel9;
        
        socioInstance.save(function (err) {

          if (err) res.send(500);
          console.log("Nuevo socio persistido en DB");
        });

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
        html: "<p>Apellido: " + req.body.familyName + "</p><p>Nombre: " + req.body.name1 + "</p><p> Email: " + req.body.email + "</p><p> Direccion: " + req.body.address + "</p><p> Telefono: " + req.body.tel + "</p><p> Para mas informacion ingresar al sitio de gestion de socios en : http://cmsbarriouno.herokuapp.com/keystone </p>", 
        subject: "Nueva peticion de asociacion",
        to: "facundodelgado.1@gmail.com, socios@sdfbarriouno.com.ar, jcbottino@infovia.com.ar",
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500);
        }
        console.log("Message sent: " + info.response);
    });
	
	res.redirect('/asociacion-correcta');


});

module.exports = router;