import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAS8YR9cm7ttZBOo4Dh1L4hHrPMc8FNYiY",
    authDomain: "upang-bulletin.firebaseapp.com",
    projectId: "upang-bulletin",
    storageBucket: "upang-bulletin.appspot.com",
    messagingSenderId: "1018288306945",
    appId: "1:1018288306945:web:0663facd546d2e8ffbf900",
    measurementId: "G-Z6TPHJSER9"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };