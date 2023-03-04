// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALaOgNKmP83jlIM-jZzI7QBIr5wzXC9IQ",
  authDomain: "netflix-clone-yt-67d40.firebaseapp.com",
  projectId: "netflix-clone-yt-67d40",
  storageBucket: "netflix-clone-yt-67d40.appspot.com",
  messagingSenderId: "668249413896",
  appId: "1:668249413896:web:ea8ad863c584e9f95a74bd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
