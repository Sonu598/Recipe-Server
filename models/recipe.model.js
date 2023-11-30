const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  category: String,
  ingredients: String,
  instructions: String,
  price: Number,
});

const recipeModel=mongoose.model('recipe', recipeSchema);

module.exports = {
  recipeModel
}
