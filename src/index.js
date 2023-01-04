import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHSZHlm2Ph7aR2DHab5refbPeFcHNrsKs",
    authDomain: "tienda-ajedrez.firebaseapp.com",
    projectId: "tienda-ajedrez",
    storageBucket: "tienda-ajedrez.appspot.com",
    messagingSenderId: "59366102001",
    appId: "1:59366102001:web:407bcddcd00aed46e1ea50"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);