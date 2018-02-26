var ZoneController = require('./ZoneController')
var CommentController = require('./CommentController')

module.exports = {
	index : function(req, res){
		console.log("indexer");
		res.send([1,2,3])
	},
	comment: CommentController,
	zone: ZoneController

}