import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCsev2elWhybcF2yAOMHeaxhgLKY8EygBc",
  authDomain: "crypto-app-6ed9f.firebaseapp.com",
  projectId: "crypto-app-6ed9f",
  storageBucket: "crypto-app-6ed9f.appspot.com",
  messagingSenderId: "629268851511",
  appId: "1:629268851511:web:e09a63f0d38f39867248b2",
  measurementId: "G-QCLF6G17P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }