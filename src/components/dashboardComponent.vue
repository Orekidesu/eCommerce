<template>

  <!-- Make 2 columns left side is an image, right side is product description -->
  <div class="flex flex-col md:flex-row justify-center max-w-screen px-4 ">
    <div class="w-full md:w-1/2 flex justify-center">
      <div v-if="isLoading" class="flex items-center justify-center h-full w-4/5 bg-accent rounded   animate-pulse  ">
        <svg class="w-10 h-10 text-accent-foreground " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 20 18">
          <path
            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <img v-else :src="selectedColorImage" alt="Product Image" class="h-4/5 border">
    </div>
    <div class="w-full md:w-1/2 flex justify-start flex-col gap-2  md:px-0">
      <h1 class="xl:text-5xl md:text-4xl text-3xl">{{ productName }}</h1>
      <p>₱{{ productPrice }} php</p>
      <p><strong>Color</strong></p>
      <!-- make a dropdown menu -->
      <select v-model="selectedColor"
        class="bg-transparent border border-primary sm:text-sm rounded-lg w-40 block p-2.5 focus:ring focus:border-accent">
        <option value="Navy">Navy</option>
        <option value="Gray">Gray</option>
        <option value="Dark Gray">Dark Gray</option>
        <option value="White">White</option>
      </select>
      <p><strong>Size</strong></p>
      <select
        class="bg-transparent border border-primary sm:text-sm rounded-lg w-40 block p-2.5 focus:ring focus:border-accent">
        <option value="option1">XS</option>
        <option value="option2">S</option>
        <option value="option3">M</option>
        <option value="option1">L</option>
        <option value="option2">XL</option>
        <option value="option3">XXL</option>
      </select>
      <p><strong>Quantity</strong></p>
      <input class="rounded-lg w-40" type="number" name="" id="" value="1">

      <!-- Add two buttons: add to card and buy now -->
      <div class="flex flex-col gap-3 pr-4 mt-1">
        <router-link to="/cart" class="hover:underline">
          <button
            class=" w-full border border-primary bg-secondary text-secondary-foreground py-2 rounded-lg hover:bg-primary hover:text-primary-foreground">Add
            to Cart</button>
        </router-link>
        <router-link to="/buyProduct" class="hover:underline">
          <button
            class=" w-full der-primary bg-secondary text-secondary-foreground py-2 rounded-lg hover:bg-primary hover:text-primary-foreground">Buy
            it
            Now</button>
        </router-link>
      </div>
      <router-link :to="`/productDetails/${productId}`" class="hover:underline">
        View full details
      </router-link>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 px-2 md:px-4">
    <h1 class="xl:text-4xl md:text-3xl text-2xl">Featured Products</h1>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center">
      <!-- make a list of images -->
      <router-link to="/productDetails" class="hover:underline">
        <div class="overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110 h-44 md:h-96"
            src="../assets/cleanCollarNavy.png" alt="cleanCollarNavy">
        </div>
        <div class="text-start">
          <p class="">
            CleanCollar Men's Shirt</p>
          <p>₱2,526.99 PHP</p>
        </div>
      </router-link>
      <router-link to="/productDetails" class="hover:underline">
        <div class=" overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110 h-44 md:h-96" src="../assets/luxPlaid.png"
            alt="cleanCollarNavy">
        </div>
        <div class="text-start">
          <p>LuxPLaid Shirt for men</p>
          <p>₱1,999.99 PHP</p>
        </div>
      </router-link>
      <router-link to="/productDetails" class="hover:underline">
        <div class=" overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110 h-44 md:h-96" src="../assets/thermalJacket.png"
            alt="thermal Jacket">
        </div>
        <div class="text-start">
          <p>Thermal Jacket</p>
          <p>₱6,475.99 PHP</p>
        </div>
      </router-link>
      <router-link to="/productDetails" class="hover:underline">
        <div class=" overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110 h-44 md:h-96" src="../assets/fluffJacket.png"
            alt="Product 4">
        </div>
        <div class="text-start">
          <p>Fluf Jacket</p>
          <p>₱4,896.99 PHP</p>
        </div>
      </router-link>
    </div>
  </div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductController } from '../controllers/productController.ts';

const {
  selectedColor,
  selectedColorImage,
  isLoading,
  productName,
  productPrice,
  productId,
  fetchProductData,
} = useProductController();

onMounted(async () => {
  await fetchProductData();
  console.log(productId);

});
</script>