// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE,
  appId: import.meta.env.VITE_FIREBASE_APP,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT,
};

const firebase_app = initializeApp(firebaseConfig);
const analytics =
  typeof window !== "undefined" ? getAnalytics(firebase_app) : null;

const firebase_db = getFirestore(firebase_app);
if (import.meta.env.DEV) {
  connectFirestoreEmulator(firebase_db, "127.0.0.1", 8080);
}

export { firebase_app, firebase_db, analytics };
