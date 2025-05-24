const express = require('express');
const app = express();

const bookRouter = express.Router();
let book = require('./module/book');
const { error } = require('console');

// add book
bookRouter.route('/add-book').post((req, res) => {
   book.create(req.body, (err, data) => {
        if (err) {
          return next(error);
        }else{
          res.json(book);
        }
   })
}); 

// get book all
bookRouter.route('/').get((req, res) => {
    book.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(books);
        }
    });
});

// get book by id
bookRouter.route('/read-book/:id').get((req, res) => {  
    book.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});


// update book
bookRouter.route('/update-book/:id').put((req, res, next) => {
    book.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
            console.log('Book updated successfully!');
        }
    });
});k

module.exports = bookRouter;

