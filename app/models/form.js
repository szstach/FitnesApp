
var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var FormSchema = new Schema({
    
    
      namee:String,
      plec: String,
      waga:Number,
      wzrost: Number,
      wiek:Number,
      aktywnosc: String,
      cel: String,
      done : Boolean,
   
      
});

module.exports = mongoose.model('Form', FormSchema );





