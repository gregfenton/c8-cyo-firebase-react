import React, { createContext } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWrlTqwKQYaxj23iwDhPJbR85D1qY_cDk",
  authDomain: "c8-cyo-firebase-2.firebaseapp.com",
  projectId: "c8-cyo-firebase-2",
  storageBucket: "c8-cyo-firebase-2.appspot.com",
  messagingSenderId: "454536000399",
  appId: "1:454536000399:web:95b200216d2779153f51fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseContext = createContext();

function FirebaseProvider(props) {
  const children = props.children;
  const theValues = { app };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
