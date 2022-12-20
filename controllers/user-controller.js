const { insertUser } = require("../models/user-model");

exports.postUsers = (req, res, next) => {
  const userBody = req.body;
  insertUser(userBody)
    .then((user) => {
      res.status(201).send({ user: user });
    })
    .catch((err) => {
      next(err);
    });
};
