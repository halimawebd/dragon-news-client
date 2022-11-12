// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz3qa1ETZvxy7xG8un07W3wIC-fkmNND8",
  authDomain: "dragon-news-ae5bf.firebaseapp.com",
  projectId: "dragon-news-ae5bf",
  storageBucket: "dragon-news-ae5bf.appspot.com",
  messagingSenderId: "1086035459443",
  appId: "1:1086035459443:web:1f23b36346c4b9a5431906"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;