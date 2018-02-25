var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController')
var Response = require('../models/Response');
/* GET home page. */


router.get('/', ZoneController.index);

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	if(resource=='zone'){
		ZoneController.find(req.query, function(err,result){
			if(err){
				res.status(404).send(new Response('fail', null, 1, "Not Found"))
				return
			}
			res.send(new Response('success', result))
		})
	}
});

router.get('/:resource/:id', function(req,res,next){
	if(req.params.resource=='zone'){
		ZoneController.findById(req.params.id, function(err,result){
			if(err){
				res.status(404).send(new Response('fail', null, 1, 'Not Found'))
				return
			}
			res.send(new Response('success', result))
		})
	}
})

module.exports = router;
