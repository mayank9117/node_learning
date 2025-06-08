const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  work: {
    type: String,
    enum: ['chef', 'waiter', 'manager'], // optional validation
    required: true
  },
  mobile:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: false
  },
  address:{
    type:String,
  },
  salary:{
    type:Number,
    required:true,
  }

  
});

// Create model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;