const express = require("express");
const cors = require("cors");
const { postUsers } = require("./controllers/user-controller");

const app = express();

app.use(express.json());

app.post("/api/users", postUsers);

app.listen(9090, () => {
  console.log("listen on 9090");
});

module.exports = app;
