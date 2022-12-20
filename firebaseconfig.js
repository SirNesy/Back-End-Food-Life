// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAICHMfGR-CqzecA7APddfkKJaXuOfIIcc",
  authDomain: "foodlife-994b9.firebaseapp.com",
  projectId: "foodlife-994b9",
  storageBucket: "foodlife-994b9.appspot.com",
  messagingSenderId: "1070224308432",
  appId: "1:1070224308432:web:f13ef29aae3407ecdf46d5",
  measurementId: "G-J1T28CL52S",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
