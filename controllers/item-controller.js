const {
  insertItem,
  selectAllItems,
  selectitemById,
  updateItem,
  removeItem,
} = require("../models/item-model");

exports.postItem = (req, res, next) => {
  const { userId } = req.params;
  const itemBody = req.body;
  insertItem(itemBody, userId)
    .then((item) => {
      res.status(201).send({ item: item });
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchItem = (req, res, next) => {
  const { userId, itemId } = req.params;
  const itemBody = req.body;
  updateItem(itemBody, userId, itemId)
    .then((item) => {
      res.status(200).send({ item: item });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getAllItems = (req, res, next) => {
  const { userId } = req.params;
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
  selectitemById(itemId, userId)
    .then((item) => {
      res.status(200).send({ item });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteItem = (req, res, next) => {
  const { userId, itemId } = req.params;
  removeItem(userId, itemId)
    .then((item) => {
      res.status(200).send({ msg: item.msg });
    })
    .catch((err) => {
      next(err);
    });
};

// app.delete("/user/:user_id", async (req, res) => {
//   const { user_id } = req.params;
//   console.log(user_id);

//   const docUser = doc(db, "users", user_id);

//   await deleteDoc(docUser);
//   res.send({ msg: "deleted successfully" });
// });
