const { db } = require("../firebaseconfig.js");
const {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} = require("firebase/firestore");

exports.selectRecipes = async () => {
    const recipes = await getDocs(db, "recipes")
    console.log(recipes, recipes.data());
    return recipes;
}