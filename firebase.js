import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAOFnKy8LD7UyBhEnNwEk92XgaiHNJ32Ok",
  authDomain: "appcripto-3d162.firebaseapp.com",
  projectId: "appcripto-3d162",
  storageBucket: "appcripto-3d162.appspot.com",
  messagingSenderId: "1007533481266",
  appId: "1:1007533481266:web:e09f266ce68bbe05a24b2b"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);