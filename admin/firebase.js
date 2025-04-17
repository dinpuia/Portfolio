// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeXPI59Y1t3EqcS11_05Qyc-i16o5iriQ",
  authDomain: "endless-grafix-admin-5fff7.firebaseapp.com",
  projectId: "endless-grafix-admin-5fff7",
  storageBucket: "endless-grafix-admin-5fff7.firebasestorage.app",
  messagingSenderId: "685694239178",
  appId: "1:685694239178:web:e3bbe47e8c32a0df4f8f33",
  measurementId: "G-T41P34TGKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
