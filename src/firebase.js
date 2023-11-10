// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-7566f.firebaseapp.com",
  projectId: "realestate-7566f",
  storageBucket: "realestate-7566f.appspot.com",
  messagingSenderId: "22494245744",
  appId: "1:22494245744:web:875210930dc70cd3c115b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
