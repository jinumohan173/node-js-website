var express = require('express');
var router = express.Router();


//<%include header.ejs%>

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'testing',
	  name:"hello" });
});

module.exports = router;
