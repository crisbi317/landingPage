import { doc, getDoc } from "firebase/firestore";
import { db } from "./../firebaseConfig.js"; 

export default async function getProducts(id) {
  console.log("Consultando Firestore colección 'productos' con id:", id);
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Documento encontrado:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No se encontró documento con id:", id);
      throw new Error("No se encontró el producto con id: " + id);
    }
  }

