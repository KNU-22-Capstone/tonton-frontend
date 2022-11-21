import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyBfLrWF_p_wxib7afnyP_9Pz_Qdk4iskEI",
    authDomain: "tttest-95867.firebaseapp.com",
    projectId: "tttest-95867",
    storageBucket: "tttest-95867.appspot.com",
    messagingSenderId: "42474123501",
    appId: "1:42474123501:web:89b6a1b0620dfcf1699ce4",
    measurementId: "G-QVQSQ8F2F4"
  };
  

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);



