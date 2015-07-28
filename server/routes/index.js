var express = require('express');
var path = require('path');
var getBalance = require('../module3');

var router = express.Router();

router.get('/getBalance', function(request, response, next){
    response.send(getBalance());
    });


router.get("/*", function(req, res, next) {
    console.log("router sending index.html file");
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
    //next();
});

module.exports = router;