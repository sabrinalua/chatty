var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController')
var Response = require('../models/Response');


/* GET users listing. */
router.route('/:models')
	.get(function(req, res, next) {
	  var model = req.params.models
	  var limit = (req.query.limit) ? req.query.limit : 0
	  switch(model){
	  	case 'zone':
	  		res.send(limit+'')
	  		break
	  	default:
	  		res.send('fail')
	  }
	})

module.exports = router;
