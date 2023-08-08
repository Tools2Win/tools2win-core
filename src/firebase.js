import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBttlwwYOOVFfTw1yioOjWSZazf5dZNFl0",
    authDomain: "tools2win.firebaseapp.com",
    projectId: "tools2win",
    storageBucket: "tools2win.appspot.com",
    messagingSenderId: "456885395422",
    appId: "1:456885395422:web:317e4561113534cabbc74f"
};

const app = initializeApp(firebaseConfig);

console.log('test')

export const auth = getAuth(app);