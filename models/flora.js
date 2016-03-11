var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FloraSchema = new Schema({
  name: String,
  category: String,
  season: String,
  latlong: String,
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Flora', FloraSchema);

// for line 7 {type: mongoose.schema.Types.ObjectId, ref: 'User'}
