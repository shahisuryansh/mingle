import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDW_WZxxjGpeO-LNEDycsCcex_k0W2sJcY",
    authDomain: "minglee-731f3.firebaseapp.com",
    projectId: "minglee-731f3",
    storageBucket: "minglee-731f3.appspot.com",
    messagingSenderId: "370666089919",
    appId: "1:370666089919:web:71b11934c469f4f9fa450a",
    measurementId: "G-YVMLHCDSJ8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig) ;

  const database = firebaseApp.firestore() ;
  export default database ;