const {
  selectRecipes,
  selectRecipe,
  insertRecipe,
  updateRecipe,
  removeRecipe,
} = require("../models/recipe-model");

exports.getRecipes = (req, res, next) => {
  selectRecipes()
    .then((recipes) => {
      res.status(200).send({ recipes: recipes });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getRecipe = (req, res, next) => {
  const { recipeId } = req.params;
  selectRecipe(recipeId)
    .then((recipe) => {
      res.status(200).send({ recipe: recipe });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postRecipe = (req, res, next) => {
  const recipeBody = req.body;
  insertRecipe(recipeBody)
    .then((recipe) => {
      res.status(201).send({ recipe: recipe });
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchRecipe = (req, res, next) => {
  const { recipeId } = req.params;
  const recipeBody = req.body;
  updateRecipe(recipeBody, recipeId)
    .then((recipe) => {
      res.status(200).send({ recipe: recipe });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteRecipe = (req, res, next) => {
  const { recipeId } = req.params;
  removeRecipe(recipeId)
    .then((recipe) => {
      res.status(200).send({ msg: recipe.msg });
    })
    .catch((err) => {
      next(err);
    });
};
