const express = require("express");
const cors = require("cors");
const { postUsers } = require("./controllers/user-controller");
const {
  postItem,
  getAllItems,
  getItemById,
} = require("./controllers/item-controller");

const app = express();

app.use(express.json());

app.post("/api/users", postUsers);

app.post("/api/items", postItem);

app.get("/api/items", getAllItems);

app.get("/api/items/:item_id", getItemById);

app.listen(9494, () => {
  console.log("listen on 9090");
});

module.exports = app;
