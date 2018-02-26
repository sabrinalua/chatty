var Zone = require('../models/Zone')

module.exports = {
	index : function(req, res){
		console.log("indexer");
		res.send([1,2,3])
	},

	find: function(params, callback){
		Zone.find(params, function(err,zones){
			if(err){
				callback(err, null)
				return
			}
			callback(null,zones)
		})
	},
	findById: function(id, callback){
		Zone.findById(id, function(err,zone){
			if(err){
				callback(err, null)
				return
			}
			callback(null,zone)
		})

	},	
	create: function(params,callback){
		var zip = params['zip']
		var zips = zip.split(',')
		var newZips = []
		zips.forEach(function(zipcode){
			newZips.push(zipcode.trim())
		})

		params['zip'] = newZips

		Zone.create(params, function(err, zone){
			if(err){
				callback(err, null)
				return
			}
			callback(null,zone)
		})
	},

	update: function(id, params,callback){
		
	},
	delete: function(){},
}