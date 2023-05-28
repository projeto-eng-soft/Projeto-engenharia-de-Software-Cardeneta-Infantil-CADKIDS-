// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqv32F7aLAeQU2-YTsBGNd0w6us_JMhzo",
  authDomain: "proj-cadkids.firebaseapp.com",
  databaseURL: "https://proj-cadkids-default-rtdb.firebaseio.com",
  projectId: "proj-cadkids",
  storageBucket: "proj-cadkids.appspot.com",
  messagingSenderId: "974176065479",
  appId: "1:974176065479:web:0b377a4e7a2ff7c8f5abe2",
  measurementId: "G-1KDKLBYV1P"
};

// Initialize Firebase



export const FireApp = initializeApp(firebaseConfig);
export const DB = getFirestore(FireApp);
