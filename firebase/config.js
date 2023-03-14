
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC5QeIqypnD4kXfP38RYpsB2gjiPoyr3hk",
  authDomain: "ecommerce-8745e.firebaseapp.com",
  projectId: "ecommerce-8745e",
  storageBucket: "ecommerce-8745e.appspot.com",
  messagingSenderId: "557463196028",
  appId: "1:557463196028:web:6d46f0b42fc0ead30ad4f9"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = () => app 