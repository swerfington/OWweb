var express = require('express');
var router = express.Router();

/* GET books*/
router.get('/', function(req, res ) {
    res.render('aboutme', { title: 'About Me' });
});

module.exports = router;