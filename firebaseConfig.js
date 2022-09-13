import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcs1LBj6Oe85cjGT_B8k_hTNHulB3yUuc",
  authDomain: "firestore-prac-3f5c6.firebaseapp.com",
  projectId: "firestore-prac-3f5c6",
  storageBucket: "firestore-prac-3f5c6.appspot.com",
  messagingSenderId: "351806399873",
  appId: "1:351806399873:web:9258abf21977029cf0f480",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
