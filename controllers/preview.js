'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    
     res.render('homeFull', {layout: false});
});

module.exports = router;