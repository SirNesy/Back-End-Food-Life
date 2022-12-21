const {
  insertItem,
  selectAllItems,
  selectitemById,
} = require("../models/item-model");

exports.postItem = (req, res, next) => {
  const {userId} = req.params;
  const itemBody = req.body;
  insertItem(itemBody, userId)
    .then((item) => {
      res.status(201).send({ item: item });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllItems = (req, res, next) => {
  const {userId} = req.params;
  selectAllItems(userId)
    .then((items) => {
      res.status(200).send({ items });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getItemById = (req, res, next) => {
  const { userId, itemId } = req.params;
  selectitemById(itemId, userId).then((item) => {
    res.status(200).send({ item });
  }).catch(err => {
    next(err);
  });
};
