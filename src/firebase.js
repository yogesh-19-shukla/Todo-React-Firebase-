  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyAAU686ktOBnebZncHC9dKcm3oduTScblE",
        authDomain: "todo-app-ys-cf273.firebaseapp.com",
        projectId: "todo-app-ys-cf273",
        storageBucket: "todo-app-ys-cf273.appspot.com",
        messagingSenderId: "41077914494",
        appId: "1:41077914494:web:f51dfd50f5a37c6c75d12f",
        measurementId: "G-1YW6KNPHLL"
      
  });

  const db = firebaseApp.firestore();


  export default db;