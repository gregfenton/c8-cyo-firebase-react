import React, { createContext } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWrlTqwKQYaxj23iwDhPJbR85D1qY_cDk',
  authDomain: 'c8-cyo-firebase-2.firebaseapp.com',
  projectId: 'c8-cyo-firebase-2',
  storageBucket: 'c8-cyo-firebase-2.appspot.com',
  messagingSenderId: '454536000399',
  appId: '1:454536000399:web:95b200216d2779153f51fa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const FirebaseContext = createContext();

function FirebaseProvider(props) {
  const children = props.children;
  const theValues = { app, auth, db };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
