import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


  // const firebaseConfig = {
  //   apiKey: "AIzaSyBfLrWF_p_wxib7afnyP_9Pz_Qdk4iskEI",
  //   authDomain: "tttest-95867.firebaseapp.com",
  //   projectId: "tttest-95867",
  //   storageBucket: "tttest-95867.appspot.com",
  //   messagingSenderId: "42474123501",
  //   appId: "1:42474123501:web:89b6a1b0620dfcf1699ce4",
  //   measurementId: "G-QVQSQ8F2F4"
  // };
  
  const firebaseConfig = {
    apiKey: "AIzaSyCEp0kWaVrGnYZ32QybC9eQyXk4Z2v4es4",
    authDomain: "codiwiki-tonton.firebaseapp.com",
    projectId: "codiwiki-tonton",
    storageBucket: "codiwiki-tonton.appspot.com",
    messagingSenderId: "1012508499472",
    appId: "1:1012508499472:web:978acfceba2391f5277495",
    measurementId: "G-84X1G7CG66"
  };


  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  export const db = getFirestore(app);  
  

 



