import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACsQ9xj33Z3ATbaBjT5ggFVT2qIfWlPZM",
    authDomain: "blog-web-18d05.firebaseapp.com",
    projectId: "blog-web-18d05",
    storageBucket: "blog-web-18d05.firebasestorage.app",
    messagingSenderId: "1044110255419",
    appId: "1:1044110255419:web:a82d1788ead1ba5acac31e",
    measurementId: "G-LP19LBPPGV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };