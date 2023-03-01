// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt7QwJKNVAbL8dAJ6TEgMSVU-UjIQs_YY",
  authDomain: "timesheets-bcf3b.firebaseapp.com",
  projectId: "timesheets-bcf3b",
  storageBucket: "timesheets-bcf3b.appspot.com",
  messagingSenderId: "73665121452",
  appId: "1:73665121452:web:9d23e91529f94485de6309"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestoreDb = getFirestore(firebaseApp);