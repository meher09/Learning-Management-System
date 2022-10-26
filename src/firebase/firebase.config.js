// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqAZwlrNrIwRAsddirkQXk8DkxMqLgZ3M",
    authDomain: "itshikkha-web.firebaseapp.com",
    projectId: "itshikkha-web",
    storageBucket: "itshikkha-web.appspot.com",
    messagingSenderId: "736287901078",
    appId: "1:736287901078:web:667dfcb5e722ea554409b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app