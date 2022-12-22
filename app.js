const express = require("express");
const cors = require("cors");
const { getRecipes, getRecipe } = require("./controllers/recipe-controller");
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

app.all("/*", (req, res) => {
  res.status(404).send("404: URL Not Found");
});

app.use(handleCustomError);

module.exports = app;
