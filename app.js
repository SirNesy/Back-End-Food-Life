const express = require("express");
const cors = require("cors");
const {
  getRecipes,
  getRecipe,
  postRecipe,
  patchRecipe,
  deleteRecipe,
} = require("./controllers/recipe-controller");
const {
  postUsers,
  getUserById,
  patchUser,
  deleteUser,
} = require("./controllers/user-controller");
const {
  postItem,
  getAllItems,
  getItemById,
  patchItem,
  deleteItem,
} = require("./controllers/item-controller");
const {
  postComment,
  getComments,
  deleteComment,
  patchComment,
} = require("./controllers/comments-controller");
const { handleCustomError } = require("./error");

const app = express();

app.use(express.json());

app.post("/api/users", postUsers);

app.get("/api/users/:userId", getUserById);

app.patch("/api/users/:userId", patchUser);

app.delete("/api/users/:userId", deleteUser);

app.post("/api/users/:userId/items", postItem);

app.patch("/api/users/:userId/items/:itemId", patchItem);

app.get("/api/users/:userId/items", getAllItems);

app.get("/api/users/:userId/items/:itemId", getItemById);

app.delete("/api/users/:userId/items/:itemId", deleteItem);

app.get("/api/recipes", getRecipes);

app.get("/api/recipes/:recipeId", getRecipe);

app.post("/api/recipes", postRecipe);

app.patch("/api/recipes/:recipeId", patchRecipe);

app.delete("/api/recipes/:recipeId", deleteRecipe);

app.post("/api/comments", postComment);

app.get("/api/recipes/:recipeId/comments", getComments);

app.delete("/api/comments/:commentId", deleteComment);

app.patch("/api/comments/:commentId", patchComment);

app.all("/*", (req, res) => {
  res.status(404).send("404: URL Not Found");
});

app.use(handleCustomError);

module.exports = app;
