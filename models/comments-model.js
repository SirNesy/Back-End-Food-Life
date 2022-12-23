const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} = require("firebase/firestore");

exports.insertComment = async (commentBodyObj) => {
  commentBodyObj.created_at = new Date();
  const commentRef = collection(db, "comments");
  const result = await addDoc(commentRef, commentBodyObj);
  const comment = await getDoc(doc(commentRef, result.id));
  return comment.data();
};

exports.selectComments = async (recipeId) => {
  let commentData = [];
  const commentRef = collection(db, "comments");
  const allComments = await getDocs(commentRef, "comments");
  allComments.docs.filter((comment) => {
    let recipeIdRef = comment.data().recipeId;
    if (recipeId === recipeIdRef) {
      commentData.push({ commentId: comment.id, ...comment.data() });
    }
  });
  return commentData;
};

exports.removeComment = async (commentId) => {
  const commentRef = doc(db, "comments", commentId);
  await deleteDoc(commentRef);

  return { status: 200, msg: "200 : Comment Deleted Successfully" };
};

exports.updateComment = async (commentBody, commentId) => {
  const commentRef = doc(db, "comments", commentId);

  const comment = await getDoc(commentRef);
  if (!comment.exists()) {
    return Promise.reject({ status: 404, msg: "404 - Comment Not Found" });
  }

  let commentData = { ...comment.data() };
  commentData.votes = commentData.votes + commentBody.inc_votes;

  await updateDoc(commentRef, commentData);

  const updatedComment = await getDoc(commentRef);
  return updatedComment.data();
};
