var mongoose = require('mongoose')

var ZoneSchema = new mongoose.Schema({
	name: {type:String,default:''},
	zip: {type:Array, default:[]},
	timesatamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)
