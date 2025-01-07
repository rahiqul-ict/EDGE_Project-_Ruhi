// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6q8mlmHKYmV_BijcfCxwZnM2vZy0jMNg",
  authDomain: "dentist-bhai-by-shadman.firebaseapp.com",
  projectId: "dentist-bhai-by-shadman",
  storageBucket: "dentist-bhai-by-shadman.appspot.com",
  messagingSenderId: "232797468841",
  appId: "1:232797468841:web:3ea63ccd1d844fc77751b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
