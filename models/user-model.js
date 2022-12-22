const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} = require("firebase/firestore");

exports.insertUser = async (userBody) => {
  await setDoc(doc(db, "users", userBody.userId), userBody);
  const docreq = doc(db, "users", userBody.userId);
  const data = await getDoc(docreq);
  return data.data();
};

exports.selectUserById = async (userId) => {
  const user = await getDoc(doc(db, "users", userId));
  if (user.exists()) {
    return user.data();
  }
  return Promise.reject({ status: 404, msg: "404: User Not Found" });
};

exports.updateUser = async (userId, userBody) => {
  //check if user exists
  const user = await getDoc(doc(db, "users", userId));
  if (!user.exists()) {
    return Promise.reject({ status: 404, msg: "404 - User Not Found" });
  }

  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, userBody);

  const userData = await getDoc(userRef);

  return { ...userData.data() };
};

exports.removeUser = async (userId) => {
  const user = await getDoc(doc(db, "users", userId));
  if (!user.exists()) {
    return Promise.reject({ status: 404, msg: "404 - User Not Found" });
  }
  const userRef = doc(db, "users", userId);
  await deleteDoc(userRef);
  return { status: 200, msg: "200 : User Deleted Successfully" };
};
