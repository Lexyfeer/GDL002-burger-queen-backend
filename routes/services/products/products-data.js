const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const ProductsSchema = new Schema({
  Name: String,
  Ingredients: String,
  Price: Number,
  Image: String,
  Menu: String
//   Menu: String, enum: ['Breakfast', 'Lunch']
});

module.exports = mongoose.model('products', ProductsSchema);
