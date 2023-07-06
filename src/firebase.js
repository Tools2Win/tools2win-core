import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY
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
