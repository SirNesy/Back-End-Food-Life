const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
} = require("firebase/firestore");

exports.insertItem = async (itemBody) => {
  itemBody.created_at = new Date();

  const result = await addDoc(collection(db, "items"), itemBody);
  const docreq = doc(db, "items", result.id);
  const data = await getDoc(docreq);

  return { itemId: result.id, ...data.data() };
};

exports.selectAllItems = async () => {
  const userItems = await getDocs(collection(db, "items"));

  let result = userItems.docs.map((item) => {
    return { itemId: item.id, ...item.data() };
  });

  return result;
};

exports.selectitemById = async (item_id) => {
  const userItems = await getDocs(collection(db, "items"));
  let itemData = {};

  userItems.docs.filter((item) => {
    if (item_id === item.id) {
      console.log(item.data());

      itemData = { itemId: item.id, ...item.data() };
    }
  });

  return itemData;
};
