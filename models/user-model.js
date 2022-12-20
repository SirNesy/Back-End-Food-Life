const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
} = require("firebase/firestore");

exports.insertUser = async (userBody) => {
  console.log(userBody);
  await setDoc(doc(db, "users", userBody.userId), userBody);
  const docreq = doc(db, "users", userBody.userId);
  const data = await getDoc(docreq);
  return data.data();
};
