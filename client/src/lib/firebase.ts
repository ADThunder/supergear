// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgQDo8eJotXIXib6xH8W8HIezfg2AFjrA",
  authDomain: "supergear-8f5eb.firebaseapp.com",
  projectId: "supergear-8f5eb",
  storageBucket: "supergear-8f5eb.appspot.com",
  messagingSenderId: "393293927358",
  appId: "1:393293927358:web:5c2edf2ef08d88fab55fef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
