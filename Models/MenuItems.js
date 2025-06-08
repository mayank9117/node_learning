const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['starter', 'main-course', 'dessert', 'beverage'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  description: {
    type: String
  },
  ingredients: {
    type: [String]
  },
  imageUrl: {
    type: String // optional image link
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
