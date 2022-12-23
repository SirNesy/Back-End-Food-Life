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

exports.selectRecipes = async () => {
  const recipes = [];
  const recipesData = await getDocs(collection(bd, "recipes"));
  recipes.forEach((doc) => {
    recipes.push(doc.data());
  });
  return recipes;
};

exports.selectRecipe = async (recipeId) => {
  const recipeRef = doc(db, "recipes", recipeId);
  const recipe = await getDoc(recipeRef);
  if (recipe.exists()) {
    return recipe.data();
  }
  return Promise.reject({ status: 404, msg: "404 - Recipe Not Found" });
};

exports.insertRecipe = async (recipeBody) => {
  if (
    !recipeBody?.userId ||
    !recipeBody?.cuisines ||
    !recipeBody?.imageUrl ||
    !recipeBody?.ingredients ||
    !recipeBody?.instructions ||
    !recipeBody?.ready_in_minutes ||
    !recipeBody?.sourceUrl ||
    !recipeBody?.summary ||
    !recipeBody?.title
  ) {
    return Promise.reject({
      status: 400,
      msg: "400 - Bad Request - Invalid Recipe Body",
    });
  }
  const user = await getDoc(doc(db, "users", recipeBody.userId));
  if (!user.exists()) {
    return Promise.reject({ status: 404, msg: "404 - User Not Found" });
  }
  recipeBody.created_at = new Date();
  const recipesRef = collection(db, "recipes");
  const result = await addDoc(recipesRef, recipeBody);
  const recipe = await getDoc(doc(recipesRef, result.id));
  return recipe.data();
};

exports.updateRecipe = async (recipeBody, recipeId) => {
  const recipeRef = doc(db, "recipes", recipeId);

  const recipe = await getDoc(recipeRef);
  if (!recipe.exists()) {
    return Promise.reject({ status: 404, msg: "404 - Recipe Not Found" });
  }
  await updateDoc(recipeRef, recipeBody);

  const updatedRecipe = await getDoc(recipeRef);
  return updatedRecipe.data();
};

exports.removeRecipe = async (recipeId) => {
  const recipeRef = doc(db, "recipes", recipeId);
  await deleteDoc(recipeRef);

  return { status: 200, msg: "200 : Item Deleted Successfully" };
};
