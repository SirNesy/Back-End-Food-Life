// Import the functions you need from the SDKs you need

const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const ENV = process.env.APIKEY;
const { getFirestore } = require("firebase/firestore");

const firebaseConfig1 = {
  apiKey: `${__dirname}/../.env.${ENV}`,
  authDomain: "foodlife-994b9.firebaseapp.com",
  projectId: "foodlife-994b9",
  storageBucket: "foodlife-994b9.appspot.com",
  messagingSenderId: "1070224308432",
  appId: "1:1070224308432:web:f13ef29aae3407ecdf46d5",
  measurementId: "G-J1T28CL52S",
};
const firebaseConfig2 = {
  apiKey: "AIzaSyC-0sMcrh5PsBGU08ERprGeavNw6hMhUPM",
  authDomain: "foodlife2-d4a15.firebaseapp.com",
  projectId: "foodlife2-d4a15",
  storageBucket: "foodlife2-d4a15.appspot.com",
  messagingSenderId: "614985179823",
  appId: "1:614985179823:web:d39833e071a46831ee2a5a",
  measurementId: "G-WGTCVQCZ7L"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig2);
exports.db = getFirestore(app);

exports.authentication = getAuth(app);
