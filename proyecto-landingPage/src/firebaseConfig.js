// credenciales firebase e importado
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCaPdKT_k5GAOZxbsoAhkwW6eYqyjXYxsQ",
  authDomain: "raissa-landingpage.firebaseapp.com",
  projectId: "raissa-landingpage",
  storageBucket: "raissa-landingpage.firebasestorage.app",
  messagingSenderId: "214040624625",
  appId: "1:214040624625:web:9270067842425005ab9850"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);