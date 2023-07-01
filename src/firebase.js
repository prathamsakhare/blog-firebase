import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyHqLJdTvvOTMoPqq33jh-puRvDTs2-cA",
  authDomain: "blog-project-fe227.firebaseapp.com",
  projectId: "blog-project-fe227",
  storageBucket: "blog-project-fe227.appspot.com",
  messagingSenderId: "1089532290873",
  appId: "1:1089532290873:web:6c37aa4570f9611b756ae8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
