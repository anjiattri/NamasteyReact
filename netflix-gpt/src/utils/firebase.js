// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2jC0K6l3AnriGB65FVepcAFjElAmT4LI",
  authDomain: "netflixgpt-fd25a.firebaseapp.com",
  projectId: "netflixgpt-fd25a",
  storageBucket: "netflixgpt-fd25a.appspot.com",
  messagingSenderId: "547275866133",
  appId: "1:547275866133:web:de0e5a8e57a72f7a320e1c",
  measurementId: "G-VJ3Z96QM2B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
