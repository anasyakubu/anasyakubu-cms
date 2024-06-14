// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0lUyk5W0zXZ412tt0KtOSgtGQJoSvkfM",
  authDomain: "first-crud-f85ea.firebaseapp.com",
  projectId: "first-crud-f85ea",
  storageBucket: "first-crud-f85ea.appspot.com",
  messagingSenderId: "1008847585948",
  appId: "1:1008847585948:web:5f1e6bd10d5b2691f4e359",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
