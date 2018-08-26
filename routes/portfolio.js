var express = require('express');
var router = express.Router();
const imageFolder = "./public/images/thumbs";
const fs = require('fs');
var obj = {};
var filePaths =[];
var names = [];


/* GET imagepaths*/
router.get('/', function(req, res ) {
    var i = 0;

    fs.readdirSync(imageFolder).forEach(file => {
        filePaths[i] = file;
        names[i] = file.replaceAt(file.length - 5 , "     ").trim();
        i++;
    });

    obj = {
        "dataThumbs": filePaths,
        "dataText": names
    };

    res.render('portfolio', obj);
});

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
};

module.exports = router;
