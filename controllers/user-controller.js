const {
  insertUser,
  selectUserById,
  updateUser,
  removeUser,
} = require("../models/user-model");

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

exports.getUserById = (req, res, next) => {
  const { userId } = req.params;
  selectUserById(userId)
    .then((user) => {
      res.status(200).send({ user: user });
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchUser = (req, res, next) => {
  const { userId } = req.params;
  const userBody = req.body;
  updateUser(userId, userBody)
    .then((user) => {
      res.status(200).send({ user: user });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const { userId } = req.params;
  removeUser(userId)
    .then((user) => {
      res.status(200).send({ msg: user.msg });
    })
    .catch((err) => {
      next(err);
    });
};
