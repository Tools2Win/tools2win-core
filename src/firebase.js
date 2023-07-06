import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBttlwwYOOVFfTw1yioOjWSZazf5dZNFl0",
    authDomain: "tools2win.firebaseapp.com",
    projectId: "tools2win",
    storageBucket: "tools2win.appspot.com",
    messagingSenderId: "456885395422",
    appId: "1:456885395422:web:317e4561113534cabbc74f"
};

const app = initializeApp(firebaseConfig);

// Check if the environment is React Native
const isReactNative = () => {
    return (
        typeof navigator === 'object' &&
        navigator.product === 'ReactNative'
    );
}

// Conditionally set persistence based on environment
let persistence;

if (isReactNative()) {
    const AsyncStorage = require("@react-native-async-storage/async-storage").default;
    const { getReactNativePersistence } = require('firebase/auth/react-native');
    persistence = getReactNativePersistence(AsyncStorage);
} else {
    persistence = browserLocalPersistence;
}

export const auth = initializeAuth(app, { persistence });
