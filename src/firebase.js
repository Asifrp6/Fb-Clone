// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcxN3uphtun7Eiuwhx8WlGb2Sei6DCtwM",
  authDomain: "fb-clone-85354.firebaseapp.com",
  databaseURL: "https://fb-clone-85354-default-rtdb.firebaseio.com",
  projectId: "fb-clone-85354",
  storageBucket: "fb-clone-85354.appspot.com",
  messagingSenderId: "669534798163",
  appId: "1:669534798163:web:5e2de51b893af56c7161a6",
  measurementId: "G-DDMV6LHFX4"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db
  