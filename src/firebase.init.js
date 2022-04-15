// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuR_edpUydxG-FivsI_S5GKCEWmTi5UDE",
  authDomain: "fir-practise-app-ff255.firebaseapp.com",
  projectId: "fir-practise-app-ff255",
  storageBucket: "fir-practise-app-ff255.appspot.com",
  messagingSenderId: "931798857392",
  appId: "1:931798857392:web:f80983482bdb480aa3ed75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default auth;