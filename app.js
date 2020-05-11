var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose =require('mongoose');
const port=3002;
var Genre=require('./models/genre')
var Book=require('./models/book')

app.use(bodyParser.json());
//connect to mongoose

mongoose.connect('mongodb://localhost/bookstore',{useUnifiedTopology: true , useNewUrlParser: true });
var db=mongoose.connection;
app.get('/',function(req,res){
    res.send('mah nigga Harsh');
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
        if(err){
            throw err;
        }
      // console.log(genres);
        res.json(genres);
    })
});

app.post('/api/genres',function(req,res){
    var genre = req.body;
    Genre.addGenres(genre, function(err,genre){
        if(err){
            throw err;
        }
      // console.log(genres);
        res.json(genre);
    })
});

app.delete(`/api/genres/:_id`,function(req,res){
    Genre.delGenre(req.params._id,function(err,book){
        if(err){
            throw err;
        }
      console.log(req.params._id);
        //res.json(id);
    })
});

//console.log('kyu nhi aarha');
app.get('/api/books',function(req,res){
    Book.getBooks(function(err,books){
        if(err){
            throw err;
        }
       console.log(books);
        res.json(books);
    })
});

app.get(`/api/books/:_id`,function(req,res){
    Book.getBookbyId(req.params._id,function(err,book){
        if(err){
            throw err;
        }
       console.log(book);
        res.json(book);
    })
});

app.post('/api/books',function(req,res){
    var book = req.body;
    Book.addBook(book, function(err,book){
        if(err){
            throw err;
        }
      // console.log(genres);
        res.json(book);
    })
});

app.listen(port,function()
    {
        console.log(`Server is listening on ${port}`);
    }
);