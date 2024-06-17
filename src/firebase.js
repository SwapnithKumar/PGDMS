import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA9x4GipEOdmGSlSvuySLtk8OY7dkUoXGQ",
  authDomain: "kavach-443dd.firebaseapp.com",
  projectId: "kavach-443dd",
  storageBucket: "kavach-443dd.appspot.com",
  messagingSenderId: "961004240026",
  appId: "1:961004240026:web:942ff906457d4c484e7323"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);
