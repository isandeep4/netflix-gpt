// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnWC9ltZw3mPjrs0I8g4fH07B12wpVf-I",
  authDomain: "netflix-gpt-10-58c24.firebaseapp.com",
  projectId: "netflix-gpt-10-58c24",
  storageBucket: "netflix-gpt-10-58c24.firebasestorage.app",
  messagingSenderId: "179010949080",
  appId: "1:179010949080:web:96a3fa2651e022acb7acad",
  measurementId: "G-HR1FDR4FLD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
