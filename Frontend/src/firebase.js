// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyA8XdZjPFuJFuyeEl1NOkVTe34LPeNsh78",
  authDomain: "flipkart-clone-cd16f.firebaseapp.com",
  projectId: "flipkart-clone-cd16f",
  storageBucket: "flipkart-clone-cd16f.firebasestorage.app",
  messagingSenderId: "626733587940",
  appId: "1:626733587940:web:d8237b9eb8090ff9dcbbf1",
  measurementId: "G-ZG2DSG0X15"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// console.log(auth, db);

export const provider = new GoogleAuthProvider();

export { auth,db };
