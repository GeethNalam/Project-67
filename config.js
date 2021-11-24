import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt41rkuqaSU-y_AS3s6Sn7Wy99VSIQAYk",
  authDomain: "project-67-7fcf9.firebaseapp.com",
  databaseURL: "https://project-67-7fcf9-default-rtdb.firebaseio.com",
  projectId: "project-67-7fcf9",
  storageBucket: "project-67-7fcf9.appspot.com",
  messagingSenderId: "459151724469",
  appId: "1:459151724469:web:8654e45b2c4f9d87b7d3fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.database();