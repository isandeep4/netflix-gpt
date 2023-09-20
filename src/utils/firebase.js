// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqwkNdeeUcgOKGzafaBlYZX3294R15vXU",
  authDomain: "netflixgpt-996f7.firebaseapp.com",
  projectId: "netflixgpt-996f7",
  storageBucket: "netflixgpt-996f7.appspot.com",
  messagingSenderId: "495279548051",
  appId: "1:495279548051:web:f04e5b7d8dfde2c2174f66",
  measurementId: "G-5ME3XX712Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();