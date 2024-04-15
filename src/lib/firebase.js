import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7Q0ATtMzbYba7LOpQcwICJ1T3IOgBzLQ",
  authDomain: "crypto-app-454b7.firebaseapp.com",
  projectId: "crypto-app-454b7",
  storageBucket: "crypto-app-454b7.appspot.com",
  messagingSenderId: "71778682996",
  appId: "1:71778682996:web:32ca10ced8ae08ad592921"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };