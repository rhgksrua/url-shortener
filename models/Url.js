var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var urlSchema = new Schema({
    original_url: String,
    short: String,
    short_url: String,
    count: {type: Number, default: 0},
    date: {type: Date, default: Date.now}
});

urlSchema.methods.shorten = function() {
    
}

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;