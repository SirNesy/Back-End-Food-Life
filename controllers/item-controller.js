const {
  insertItem,
  selectAllItems,
  selectitemById,
} = require("../models/item-model");

exports.postItem = (req, res, next) => {
  const itemBody = req.body;
  insertItem(itemBody)
    .then((item) => {
      res.status(201).send({ item: item });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllItems = (req, res, next) => {
  selectAllItems()
    .then((items) => {
      res.status(200).send({ items });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getItemById = (req, res, next) => {
  const { item_id } = req.params;
  console.log(item_id);
  selectitemById(item_id).then((item) => {
    res.status(200).send({ item });
  });
};
