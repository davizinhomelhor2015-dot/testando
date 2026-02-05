// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Seu Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBdxd54oFM3eWH1duC5BTdJzjGGRDLMq-Q",
  authDomain: "mary-cb817.firebaseapp.com",
  databaseURL: "https://mary-cb817-default-rtdb.firebaseio.com",
  projectId: "mary-cb817",
  storageBucket: "mary-cb817.firebasestorage.app",
  messagingSenderId: "887348832569",
  appId: "1:887348832569:web:c6d9c32a1a1c402b8960e8",
  measurementId: "G-86HWEH554E"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, update, get };
