import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA6O2_ssnPt3_-531NL1n1d4snrw18DngA",
  authDomain: "malik-auto.firebaseapp.com",
  projectId: "malik-auto",
  storageBucket: "malik-auto.appspot.com",
  messagingSenderId: "891086163027",
  appId: "1:891086163027:web:999b45122b6bf1dddc0aa6",
  measurementId: "G-V7TFZNB3JR"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);