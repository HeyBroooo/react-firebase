import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC4xio4_1BFyRh55VOEf9BdQwzASRO3FHc",
  authDomain: "fir-3c5b7.firebaseapp.com",
  projectId: "fir-3c5b7",
  storageBucket: "fir-3c5b7.appspot.com",
  messagingSenderId: "949061314058",
  appId: "1:949061314058:web:bc484e8bb156a15548a1f3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);