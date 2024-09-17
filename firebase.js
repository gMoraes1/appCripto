import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDLDUhzWSbcn14NfvuGHkRpbxASGcYZ6gs",
  authDomain: "appbdcripto02.firebaseapp.com",
  projectId: "appbdcripto02",
  storageBucket: "appbdcripto02.appspot.com",
  messagingSenderId: "577879815277",
  appId: "1:577879815277:web:f4888213e4085608adfb64"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);