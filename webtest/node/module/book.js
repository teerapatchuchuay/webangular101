const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let book = new Schema({
    name:{
        type : String
    },
    price : {
        type : Number
    }

})
module.exports = mongoose.model('book', book);