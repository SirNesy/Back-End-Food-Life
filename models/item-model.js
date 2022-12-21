const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
} = require("firebase/firestore");

exports.insertItem = async (itemBody, userId) => {
  if (!itemBody?.itemName || !itemBody?.expiryDate || !itemBody?.amount){
    return Promise.reject({status: 400, msg: "400 - Bad Request - Invalid Item Body"})
  }
  //check if user exists
  const user = await getDoc(doc(db, "users", userId));
  if(!user.exists()) {
    return Promise.reject({status: 404, msg: "404 - User Not Found"})
  }

  itemBody.created_at = new Date();
  //insert item
  const userRef = doc(db, "users", userId)
  const itemsRef = collection(userRef, "items")
  const result = await addDoc(itemsRef, itemBody);

  //return item
  const docRef = doc(itemsRef, result.id);
  const data = await getDoc(docRef);

  return { itemId: result.id, ...data.data() };
};

exports.selectAllItems = async (userId) => {
  //check if user exists
  const user = await getDoc(doc(db, "users", userId));
  if(!user.exists()) {
    return Promise.reject({status: 404, msg: "404 - User Not Found"})
  }

  const userRef = doc(db, "users", userId)
  const userItems = await getDocs(collection(userRef, "items"));

  let result = userItems.docs.map((item) => {
    return { itemId: item.id, ...item.data() };
  });

  return result;
};

exports.selectitemById = async (itemId, userId) => {
  //check if user exists
  const user = await getDoc(doc(db, "users", userId));
  if(!user.exists()) {
    return Promise.reject({status: 404, msg: "404 - User Not Found"})
  }
  
  const userRef = doc(db, "users", userId)
  const userItems = await getDocs(collection(userRef, "items"));
  let itemData = {};

  userItems.docs.filter((item) => {
    if (itemId === item.id) {
      

      itemData = { itemId: item.id, ...item.data() };
    }
  });

  if (!Object.keys(itemData).length){
    return Promise.reject({status: 404, msg: "404: Item Not Found"})
  }

  return itemData;
};
