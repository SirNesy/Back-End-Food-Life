const { selectRecipes, selectRecipe } = require("../models/recipe-model")


exports.getRecipes = (req, res, next) => {
    selectRecipes().then(recipes => {
        res.status(200).send({recipes: recipes});
    }).catch(err => {
        next(err)
    })
}

exports.getRecipe = (req, res, next) => {
    const {recipeId} = req.params
    selectRecipe(recipeId).then(recipe => {
        res.status(200).send({recipe: recipe});
    }).catch(err => {
        next(err);
    })
}