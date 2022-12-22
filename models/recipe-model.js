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
    const recipes = []
    const recipesData = await getDocs(collection(bd, "recipes"))
    recipes.forEach(doc => {
        recipes.push(doc.data());
    })
    return recipes;
}

exports.selectRecipe = async (recipeId) => {
    const recipeRef = doc(db, "recipes", recipeId);
    const recipe = await getDoc(recipeRef);
    if (recipe.exists()) {
        return recipe.data();
    }
    return Promise.reject({ status: 404, msg: "404 - Recipe Not Found" });
}