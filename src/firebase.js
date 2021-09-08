import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBXVAvTpD-d-HrI8fdDV9Iw31WD7AOVXWo",
    authDomain: "netflix-clone-bb364.firebaseapp.com",
    projectId: "netflix-clone-bb364",
    storageBucket: "netflix-clone-bb364.appspot.com",
    messagingSenderId: "206555633547",
    appId: "1:206555633547:web:9e8be625e02143eeedc18e",
    measurementId: "G-5EP2652NK6"
  };

  //to initalize the firebase app
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  //database
  const db=firebaseApp.firestore();
  //authentication
  const auth= firebase.auth();
  // auth privoder
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();

  export {auth, provider, storage};
  export default db;
  