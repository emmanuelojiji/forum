// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtrXbGiZSyHabJAfGHMiYcNO8xx2aF15w",
  authDomain: "tech-after-dark.firebaseapp.com",
  projectId: "tech-after-dark",
  storageBucket: "tech-after-dark.appspot.com",
  messagingSenderId: "197081472900",
  appId: "1:197081472900:web:6f8c215e262f0d71db47d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
