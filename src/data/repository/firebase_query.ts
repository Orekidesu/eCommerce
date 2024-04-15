// firebase_query.ts
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { storage } from "./firebaseConfig.ts";

export async function fetchProductData() {
  // Fetch product name and price from Firestore
  const db = getFirestore();
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("id", "==", "1")); // Query for documents where 'id' is '1'
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0]; // Get the first document from the query result

    return {
      name: docSnap.data().name,
      price: docSnap.data().price,
      id: docSnap.data().id,
    };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function fetchImage(color: string) {
  const imageRef = storageRef(
    storage,
    `products/mens/clean_collar/${color}.png`
  );
  const imageUrl = await getDownloadURL(imageRef);
  return imageUrl;
}
