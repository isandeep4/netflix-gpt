// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs-XJ543RqjDAXdbZmSw_jEjhiAwub_EY",
  authDomain: "netflixgpt5-d949e.firebaseapp.com",
  projectId: "netflixgpt5-d949e",
  storageBucket: "netflixgpt5-d949e.firebasestorage.app",
  messagingSenderId: "102414089828",
  appId: "1:102414089828:web:4e86a0c25c773df31f6971",
  measurementId: "G-GGSKP8C6L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();