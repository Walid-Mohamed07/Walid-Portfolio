// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoVgT0f_8ONNVx_CkCRY6ao4g0YHhbAKs",
  authDomain: "walid-portfolio-23e48.firebaseapp.com",
  projectId: "walid-portfolio-23e48",
  storageBucket: "walid-portfolio-23e48.appspot.com",
  messagingSenderId: "966187473157",
  appId: "1:966187473157:web:8506528cd4c9c93e0e7f6c",
  measurementId: "G-6ST5ZYQ9EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);