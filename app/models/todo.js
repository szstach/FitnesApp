var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
    
    text : {
      nazwa:String,
      macro: String,
      tluszcze:Number,
      bialka: Number,
      weglowodany:Number,
      kalorie:Number
    },
    	text1 : {
      nazwa:String,
      macro: String,
      tluszcze:Number,
      bialka: Number,
      weglowodany:Number,
      kalorie:Number
    },
    text2 : {
      nazwa:String,
      macro: String,
      tluszcze:Number,
      bialka: Number,
      weglowodany:Number,
      kalorie:Number
    },
      
});

module.exports = mongoose.model('Todo', TodoSchema );


