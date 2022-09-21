import * as firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider} from  "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR5mtfVWP5zojs_UDU88AeFH0Xj4chOHI",
  authDomain: "social-media-app-v2-6a1a6.firebaseapp.com",
  projectId: "social-media-app-v2-6a1a6",
  storageBucket: "social-media-app-v2-6a1a6.appspot.com",
  messagingSenderId: "24000144846",
  appId: "1:24000144846:web:80da9c8589c64434dfb79f"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAwq_bd4mHzk7QInrDpYvNEwexC5JFFZGY",
//   authDomain: "lets-build-instagram-tut.firebaseapp.com",
//   projectId: "lets-build-instagram-tut",
//   storageBucket: "lets-build-instagram-tut.appspot.com",
//   messagingSenderId: "306658846653",
//   appId: "1:306658846653:web:54f431dd0b9245acdb54d4",
//   measurementId: "G-1KF5VV2M40"
// };

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
// const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider, storage };