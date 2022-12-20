const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
} = require("firebase/firestore");

exports.insertUser = async (userBody) => {
  const result = await setDoc(
    collection(db, "users", userBody.userId),
    userBody
  );
  const docreq = doc(db, "users", result.id);
  const data = await getDoc(docreq);
  return data.data();
};
