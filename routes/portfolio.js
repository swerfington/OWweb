var express = require('express');
var router = express.Router();
const imageFolder = "./public/images/thumbs";
const fs = require('fs');
var obj = {};
var filePaths = [];
var fileTrim = [];
var names = [];
var author = [];
var photographer = [];
var publisher = [];

/*001.Ready Steady Glow_Madeleine Shaw_Martin Poole_Orion*/

/* GET imagepaths*/
router.get('/', function (req, res) {
    var i = 0;
    fs.readdirSync(imageFolder).forEach(file => {
        var labelArray = [];
        filePaths[i] = file;
        fileTrim[i] = file.replaceAt(file.length - 4, "     ").trim();

        labelArray = fileTrim[i].slice(4, fileTrim[i].length).split("_");
        names[i] = labelArray[0];
        author[i] = labelArray[1];
        photographer[i] = labelArray[2];
        publisher[i] = labelArray[3];

        i++;
    });

    obj = {
        "dataThumbs": filePaths,
        "dataName": names,
        "dataAuthor": author,
        "dataPhotographer": photographer,
        "dataPublisher": publisher
    };

    res.render('portfolio', obj);
});

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

module.exports = router;