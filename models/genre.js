var mongoose = require('mongoose');

var genreSchema= mongoose.Schema({
   name:{type:String ,required:true},
   create_date:{type:Date, default:Date.now}
});

var Genre =module.exports = mongoose.model('Genre',genreSchema);
// get genres
module.exports.getGenres = function(callback,limit){
    Genre.find(callback).limit(limit);
}

module.exports.addGenres = function(genre,callback){
    Genre.create(genre);
}

module.exports.delGenre = function(id,callback){
    var query = {_id : id};
    Genre.deleteOne(query,callback);
}