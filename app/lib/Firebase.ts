// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6El1Pc7cNe8HadgR0l5JV3KirV_zOnmI",
  authDomain: "saas-dashboard-8a9df.firebaseapp.com",
  projectId: "saas-dashboard-8a9df",
  storageBucket: "saas-dashboard-8a9df.firebasestorage.app",
  messagingSenderId: "373046937631",
  appId: "1:373046937631:web:75d0fa59e51d5aa17ded2a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;