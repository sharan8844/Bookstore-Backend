var mongoose = require('mongoose');

var bookSchema= mongoose.Schema({
   title:{type:String ,required:true},
   author:{type:String, required:true},
   image:{type:String, required:true},
   create_date:{type:Date, default: Date.now}   
});

var Book =module.exports = mongoose.model('Book',bookSchema);

module.exports.getBooks = function(callback,limit){
   Book.find(callback).limit(limit);
}

module.exports.getBookbyId = function(id,callback){
   Book.findById(id,callback);
}

module.exports.addBook = function(book,callback){
   Book.create(book);
}

module.exports.delBook = function(book,callback){
   Book.remove(book);
}