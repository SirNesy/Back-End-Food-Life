const { selectRecipes } = require("../models/recipe-model")


exports.getRecipes = (req, res, next) => {
    selectRecipes().then(recipes => {
        res.status(200).send({recipes: recipes});
    }).catch(err => {
        next(err)
    })
}