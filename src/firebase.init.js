// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9_on4yZ5OxIipEhhTIPRuXB0_t0ZWWBk",
    authDomain: "first-firebase-a03fe.firebaseapp.com",
    projectId: "first-firebase-a03fe",
    storageBucket: "first-firebase-a03fe.firebasestorage.app",
    messagingSenderId: "845093465850",
    appId: "1:845093465850:web:e9437bdfb7cecce8c3a343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;