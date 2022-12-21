const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
} = require("firebase/firestore");

exports.insertUser = async (userBody) => {
  await setDoc(doc(db, "users", userBody.userId), userBody);
  const docreq = doc(db, "users", userBody.userId);
  const data = await getDoc(docreq);
  return data.data();
};

exports.selectUserById = async (userId) => {
  const user = await getDoc(doc(db, "users", userId));
  if(user.exists()) {
    return user.data();
  }
  return Promise.reject({status: 404, msg: "404: User Not Found"})
}