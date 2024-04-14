// productController.ts
import { ref, watch } from "vue";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { storage } from "../data/repository/firebaseConfig.ts";

export function useProductController() {
  const selectedColor = ref("Navy");
  const selectedColorImage = ref("");
  const isLoading = ref(true);
  let images = ref<Record<string, string>>({}); // Specify the type of the object

  // Add refs for product name and price
  const productName = ref("");
  const productPrice = ref("");
  const productId = ref("");

  async function fetchProductData() {
    // Fetch product name and price from Firestore
    const db = getFirestore();
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("id", "==", "1")); // Query for documents where 'id' is '1'
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0]; // Get the first document from the query result

      productName.value = docSnap.data().name;
      productPrice.value = docSnap.data().price;
      productId.value = docSnap.data().id;
    } else {
      console.log("No such document!");
    }
  }
  async function fetchImage(color: string) {
    isLoading.value = true;

    // Check if the images are in the session storage
    const storedImages = sessionStorage.getItem("images");
    if (storedImages) {
      images.value = JSON.parse(storedImages);
    }

    if (!images.value[color]) {
      const imageRef = storageRef(
        storage,
        `products/mens/clean_collar/${color}.png`
      );
      const imageUrl = await getDownloadURL(imageRef);
      images.value[color] = imageUrl; // Directly update local state

      // Store images in sessionStorage
      sessionStorage.setItem("images", JSON.stringify(images.value));
    }

    selectedColorImage.value = images.value[color];
    isLoading.value = false;
  }

  watch(selectedColor, fetchImage);

  return {
    selectedColor,
    selectedColorImage,
    isLoading,
    productName,
    productPrice,
    productId,
    fetchProductData,
    fetchImage,
  };
}
