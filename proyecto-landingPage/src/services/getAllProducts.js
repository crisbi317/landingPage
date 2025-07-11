import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

async function getAllProducts() {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);

  const productos = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return productos;
}
export default getAllProducts;