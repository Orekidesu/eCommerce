import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7ODmjYNClPpaPP72OuVr3JMTOHU-pGyw",
  authDomain: "ecommerce-10803.firebaseapp.com",
  projectId: "ecommerce-10803",
  // storageBucket: "ecommerce-10803.appspot.com",
  storageBucket: "gs://ecommerce-10803.appspot.com",
  messagingSenderId: "26162043115",
  appId: "1:26162043115:web:b72b27bbf4dfc2109646ae",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export const storageRef = ref(storage);
