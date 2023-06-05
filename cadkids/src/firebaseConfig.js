// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXvBMD6slQfJz-CanBGzGRw4zidNkVXS4",
  authDomain: "cad-kids.firebaseapp.com",
  projectId: "cad-kids",
  storageBucket: "cad-kids.appspot.com",
  messagingSenderId: "401866007511",
  appId: "1:401866007511:web:2ec2f548b412b69bf5e192",
  measurementId: "G-1VDR5ZXM97"
};

export const FireApp = initializeApp(firebaseConfig);
export const DB = getFirestore(FireApp);
