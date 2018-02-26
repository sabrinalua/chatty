var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController')
var Response = require('../models/Response');


/*format
router.get('/run', function(req,res,next){})

router.route(ROUTE).VERB(FUNCTION)
*/


/*
	endpoint: api/
	verb: ALL
*/
router.route('/').all(ZoneController.index)

/*
	endpoint: api/:resource
	verb: GET, POST
*/
router.route('/:resource')
		.get(function(req,res,next){
			var resource= req.params.resource
			if(resource=='zone'){
				ZoneController.find(req.query, function(err,result){
					if(err){
						res.status(404).send(new Response('fail', null, 1, "Not Found"))
						return
					}
					res.send(new Response('success', result))
				})
			}
		})
		.post(function(req,res,next){
			var resource = req.params.resource
			console.log("post resource")
			if(resource=='zone'){
				ZoneController.create(req.body, function(err,result){
					if(err){
						res.status(404).send(new Response('fail', null, 1, err))
						return
					}

					res.send(new Response('success', result));
				})
			}
		})

/*
	endpoint: api/:resource/:id
	verb: GET, PUT
*/
router.route('/:resource/:id')
		.get(function(req,res,next){
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
		// .put()

module.exports = router;
