var express = require('express');
var router = express.Router();
var indexAction = require('../action/indexAction.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	indexAction(req, res, next);
});

module.exports = router;
