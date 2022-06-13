
import { initializeApp } from "firebase/app";
 import { getAuth  } from "firebase/auth";
 import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDkZyUEsrRraAh7iKXQoiXOS2djJY7Jss4",
  authDomain: "auth-7856b.firebaseapp.com",
  projectId: "auth-7856b",
  storageBucket: "auth-7856b.appspot.com",
  messagingSenderId: "935575976375",
  appId: "1:935575976375:web:130b450e24b311547e9032",
  measurementId: "G-55091JYD37"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);