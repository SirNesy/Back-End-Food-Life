const { db } = require("../firebaseconfig.js");
const { collection, addDoc, doc, getDoc } = require("firebase/firestore");

exports.insertUser = async (userBody) => {
  const result = await addDoc(collection(db, "users"), userBody);
  const docreq = doc(db, "users", result.id);
  const data = await getDoc(docreq);
  return data.data();
};
