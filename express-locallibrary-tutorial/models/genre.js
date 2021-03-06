var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = Schema ({
    title: {type: String, required: true, min: 3, max: 100},

});


genreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('genre', genreSchema);