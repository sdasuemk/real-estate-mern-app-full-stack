// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJu-cgkIMnDMDAFIXuRm2dNtMXjG_nzH8",
  authDomain: "real-estate-f382d.firebaseapp.com",
  projectId: "real-estate-f382d",
  storageBucket: "real-estate-f382d.appspot.com",
  messagingSenderId: "336338169659",
  appId: "1:336338169659:web:d7c88c54372e620636d11e",
  measurementId: "G-HDT4FYVNZV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);