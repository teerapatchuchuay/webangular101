const express = require('express');
const app = express();

const bookRouter = express.Router();
let book = require('./module/book');
const { error } = require('console');


bookRouter.route('/add-book').post((req, res) => {
   book.create(req.body, (err, data) => {
        if (err) {
          return next(error);
        }else{
          res.json(data);
        }
   })
}); 


bookRouter.route('/').get((req, res) => {
    book.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});


bookRouter.route('/read-book/:id').get((req, res) => {  
    book.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});



bookRouter.route('/update-book/:id').put((req, res, next) => {
    book.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            return next(err);
            console.log(err);
        } else {
            res.json(data);
            console.log('Book updated successfully!');
            console.log(req.body);
        }
    });
});


bookRouter.route('/delete-book/:id').delete((req, res, next) => {
    book.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            });
            console.log('Book deleted successfully!');
        }
    });
});

bookRouter.route('/deletes-book').delete((req, res, next) => {
    book.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            });
            console.log('Book deleted successfully!');
        }
    });
});

module.exports = bookRouter;

