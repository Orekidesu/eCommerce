// productController.ts
import { ref, watch } from "vue";
import {
  fetchProductData,
  fetchImage,
} from "../data/repository/firebase_query";

export function useProductController() {
  const selectedColor = ref("Navy");
  const selectedColorImage = ref("");
  const isLoading = ref(true);
  // let images = ref<Record<string, string>>({}); // Specify the type of the object

  // Add refs for product name and price
  const productName = ref("");
  const productPrice = ref("");
  const productId = ref("");
  watch(selectedColor, async (newColor) => {
    try {
      selectedColorImage.value = await fetchImage(newColor);
    } catch (error) {
      console.error("Failed to fetch image:", error);
    } finally {
      isLoading.value = false;
    }
  });

  const fetchProduct = async () => {
    const productData = await fetchProductData();
    if (productData) {
      productName.value = productData.name;
      productPrice.value = productData.price;
      productId.value = productData.id;
      try {
        selectedColorImage.value = await fetchImage(selectedColor.value);
      } catch (error) {
        console.error("Failed to fetch image:", error);
      } finally {
        isLoading.value = false;
      }
    }
  };

  return {
    selectedColor,
    selectedColorImage,
    isLoading,
    productName,
    productPrice,
    productId,
    fetchProductData: fetchProduct,
  };
}
