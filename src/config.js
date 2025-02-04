// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyA04JoimDvgpySY5J7rwCtloh-hKopUzfo",
  authDomain: "nitsmun-auth-admin.firebaseapp.com",
  projectId: "nitsmun-auth-admin",
  storageBucket: "nitsmun-auth-admin.firebasestorage.app",
  messagingSenderId: "872961742448",
  appId: "1:872961742448:web:186ab18cb8ff14f989c6b5",
  measurementId: "G-RKX2Z38C7P"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };