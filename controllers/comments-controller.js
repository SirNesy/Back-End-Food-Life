const {
  insertComment,
  selectComments,
  removeComment,
  updateComment,
} = require("../models/comments-model");

exports.postComment = (req, res, next) => {
  const commentBody = req.body;
  insertComment(commentBody)
    .then((comment) => {
      res.status(201).send({ comment: comment });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getComments = (req, res, next) => {
  const { recipeId } = req.params;
  selectComments(recipeId)
    .then((comments) => {
      res.status(200).send({ comments: comments });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteComment = (req, res, next) => {
  const { commentId } = req.params;
  removeComment(commentId)
    .then((comment) => {
      res.status(200).send({ msg: comment.msg });
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchComment = (req, res, next) => {
  const { commentId } = req.params;
  const commentBody = req.body;
  updateComment(commentBody, commentId)
    .then((comment) => {
      res.status(200).send({ comment: comment });
    })
    .catch((err) => {
      next(err);
    });
};
