// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0xeBa41x4ZcoEPYZF7-GND-7oFkZpxps",
  authDomain: "chaty-66d6e.firebaseapp.com",
  projectId: "chaty-66d6e",
  storageBucket: "chaty-66d6e.appspot.com",
  messagingSenderId: "649164681837",
  appId: "1:649164681837:web:66aa415d6f5ebab52c0564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();