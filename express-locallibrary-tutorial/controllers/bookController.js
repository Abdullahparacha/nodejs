var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {   
    
    async.parallel({
        book_count: function(callback) {
            Book.count(callback);
        },
        book_instance_count: function(callback) {
            BookInstance.count(callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.count({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.count(callback);
        },
        genre_count: function(callback) {
            Genre.count(callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};


exports.book_create_post= function(req, res){ 
   console.log('book is create'); 
   console.log('you have to implement this function on your own')
   console.log('its implementation is also given in express mdn from where you are studying now')  
   res.end();
}
exports.book_delete_get= function(req, res){ 
    console.log('book is create');   
    console.log('you have to implement this function on your own')
    console.log('its implementation is also given in express mdn from where you are studying now')  
   res.end();
 }