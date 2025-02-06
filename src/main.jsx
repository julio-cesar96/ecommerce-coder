import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhKmmjmrzJHxIstCvnrVXKwwZBiFSXZjM",
  authDomain: "react-coder-f5973.firebaseapp.com",
  projectId: "react-coder-f5973",
  storageBucket: "react-coder-f5973.firebasestorage.app",
  messagingSenderId: "1069192525706",
  appId: "1:1069192525706:web:42b8d27fef140f05a93a73"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
    <App />,
)
