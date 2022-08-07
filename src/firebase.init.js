import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfwTdlhz0UPwwsYMXtVvy-sUfmjb5pQSI",
  authDomain: "random-generator-f1ecc.firebaseapp.com",
  projectId: "random-generator-f1ecc",
  storageBucket: "random-generator-f1ecc.appspot.com",
  messagingSenderId: "689133461757",
  appId: "1:689133461757:web:b3e8bf588f731beb91de94"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;