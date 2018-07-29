var express = require('express');
var router = express.Router();
const imageFolder = "./public/images/thumbs";
const fs = require('fs');
var obj = {};
var filePaths =[];


/* GET imagepaths*/
router.get('/', function(req, res ) {
    var i = 0;
    fs.readdirSync(imageFolder).forEach(file => {
        filePaths[i] = file;
        console.log(file);
        i++;
    });

    obj = {
        "dataThumbs": filePaths
    };

    res.render('portfolio', obj);
});

module.exports = router;
