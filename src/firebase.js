// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVoPj30PJI_641b7R9vKM2ijEyiiGVx2c",
  authDomain: "lets-talk-1995d.firebaseapp.com",
  projectId: "lets-talk-1995d",
  storageBucket: "lets-talk-1995d.appspot.com",
  messagingSenderId: "849694960087",
  appId: "1:849694960087:web:e8ceb4d6c43e4dea630392",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
