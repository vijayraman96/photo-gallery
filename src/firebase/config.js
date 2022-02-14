import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDziPL7j-c6-YKKRUoezVKnobBvFEsscYE",
    authDomain: "firegram-3fbba.firebaseapp.com",
    projectId: "firegram-3fbba",
    storageBucket: "firegram-3fbba.appspot.com",
    messagingSenderId: "81861238288",
    appId: "1:81861238288:web:27e23b91d9b8dfa71eb495"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const storageFirestore = getStorage(firebaseApp);
  const projectFireStore = getFirestore(firebaseApp);

  export {storageFirestore, projectFireStore , ref};