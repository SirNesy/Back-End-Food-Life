// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const ENV = process.env.APIKEY;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ENV,
  authDomain: "foodlife-c8c83.firebaseapp.com",
  projectId: "foodlife-c8c83",
  storageBucket: "foodlife-c8c83.appspot.com",
  messagingSenderId: "780210747110",
  appId: "1:780210747110:web:bf07af0509b4a85d162d27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
