// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS8YR9cm7ttZBOo4Dh1L4hHrPMc8FNYiY",
  authDomain: "upang-bulletin.firebaseapp.com",
  projectId: "upang-bulletin",
  storageBucket: "upang-bulletin.appspot.com",
  messagingSenderId: "1018288306945",
  appId: "1:1018288306945:web:0663facd546d2e8ffbf900",
  measurementId: "G-Z6TPHJSER9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
