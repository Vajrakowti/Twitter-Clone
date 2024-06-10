import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDP9sBKyeSiGXpfzQlsRHO7kM5Rsdlogfo",
    authDomain: "twitter-e4432.firebaseapp.com",
    projectId: "twitter-e4432",
    storageBucket: "twitter-e4432.appspot.com",
    messagingSenderId: "122585852304",
    appId: "1:122585852304:web:bc06e7ec22be0ed6072b15",
    measurementId: "G-9ZCS37NMVV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };