var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FloraSchema = new Schema({
	name: String,
  	category: String,
  	season: String,
  	isPrivate: {type: Boolean, default: false},
  	lat: String,
  	lng: String,
	description: String,
	creator: {type: mongoose.Schema.Types.ObjectId, ref: "User"}


});

module.exports = mongoose.model('Flora', FloraSchema);

// for line 7 {type: mongoose.schema.Types.ObjectId, ref: 'User'}
