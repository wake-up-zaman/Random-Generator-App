import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4sorABnl5i5mOtY2OGytOvOiHCb2nE_g",
  authDomain: "random-number-generator-32661.firebaseapp.com",
  projectId: "random-number-generator-32661",
  storageBucket: "random-number-generator-32661.appspot.com",
  messagingSenderId: "702781960781",
  appId: "1:702781960781:web:e99724cecc0781937d6204"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;