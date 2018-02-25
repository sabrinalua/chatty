var mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
	body: {type: String, default:''},
	username: {type: String, default:''},
	timesatamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('CommentSchema', CommentSchema)
