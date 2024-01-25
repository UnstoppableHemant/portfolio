// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8DdTMi9Vkrzt2jiE-vyneG_0bJLp7jT4",
  authDomain: "portfolio-hemant-03.firebaseapp.com",
  projectId: "portfolio-hemant-03",
  storageBucket: "portfolio-hemant-03.appspot.com",
  messagingSenderId: "452306471904",
  appId: "1:452306471904:web:46c9c55ed0d37bc2aeb985",
  measurementId: "G-ZXJVQE74L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;