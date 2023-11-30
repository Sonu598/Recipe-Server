const express=require('express');
const { recipeModel } = require('../models/recipe.model');

const recipeRouter=express.Router();

recipeRouter.post('/recipes', async (req, res) => {
    try {
        const recipe = new recipeModel(req.body);
        await recipe.save();
        res.send('A new Recipe Added')
    } catch (err) {
        res.send(err.message);
    }
});
  
recipeRouter.get('/recipes', async (req, res) => {
    try {
        const recipes = await recipeModel.find();
        res.send(recipes);
    } catch (err) {
        res.send(err.message);
    }
});
  
recipeRouter.delete('/recipes/:id', async (req, res) => {
    try {
        const recipe = await recipeModel.findByIdAndDelete(req.params.id);
        if (!recipe) {
            res.send('Recipe not found');
        }
        res.send(recipe);
        } catch (err) {
            res.send(err.message);
        }
});

recipeRouter.get('/recipes/filter/:category', async (req, res) => {
    try {
        const recipes = await recipeModel.find({ category: req.params.category });
        res.send(recipes);
    } catch (err) {
        res.send(err.message);
    }
});
  
recipeRouter.get('/recipes/sort/asc', async (req, res) => {
    try {
        const recipes = await recipeModel.find().sort({ price: 1 });
        res.send(recipes);
    } catch (err) {
        res.send(err.message);
    }
});
  
recipeRouter.get('/recipes/sort/desc', async (req, res) => {
    try {
        const recipes = await recipeModel.find().sort({ price: -1 });
        res.send(recipes);
    } catch (err) {
        res.send(err.message);
    }
});
  

module.exports={
    recipeRouter
}