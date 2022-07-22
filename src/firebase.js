import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkwVJwGXKLzDXNuJqSDW-c8LNItu3PaS0",
  authDomain: "bfl-project.firebaseapp.com",
  projectId: "bfl-project",
  storageBucket: "bfl-project.appspot.com",
  messagingSenderId: "904393791643",
  appId: "1:904393791643:web:e4a54518f8b1c36b4d0e3e",
  measurementId: "G-4NBMBYJFHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
