<template>

  <!-- Make 2 columns left side is an image, right side is product description -->
  <div class="flex flex-col md:flex-row justify-center max-w-screen px-4 ">
    <div class="w-full md:w-1/2 flex justify-center">
      <img :src="selectedColorImage" alt="Product Image" class="h-4/5 border border-8">
    </div>
    <div class="w-full md:w-1/2 flex justify-start flex-col gap-2  md:px-0">
      <h1 class="xl:text-5xl md:text-4xl text-3xl">CleanCollar Men's Shirt</h1>
      <p>1,500php</p>
      <p><strong>Color</strong></p>
      <!-- make a dropdown menu -->
      <select v-model="selectedColor"
        class="bg-transparent border border-primary sm:text-sm rounded-lg w-40 block p-2.5 focus:ring focus:border-accent">
        <option value="Navy">Navy</option>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
        <option value="Dark Gray">Dark Gray</option>
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

      <!-- Add two buttons: add to card and buy now -->
      <div class="flex flex-col gap-3 pr-4">
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
      <router-link to="/productDetails" class="hover:underline text-xs ">
        View full details
      </router-link>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 px-0 md:px-4">
    <h1 class="xl:text-4xl md:text-3xl text-2xl">Featured Products</h1>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center">
      <!-- make a list of images -->
      <router-link to="/productDetails" class="hover:underline">
        <div class="overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110" src="../assets/cleanCollarNavy.png"
            alt="cleanCollarNavy">
        </div>
        <div class="text-start">
          <p class="">Product 1</p>
          <p>₱2,526.99 PHP</p>
        </div>
      </router-link>
      <router-link to="/productDetails" class="hover:underline">
        <div class=" overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110" src="../assets/cleanCollarNavy.png"
            alt="cleanCollarNavy">
        </div>
        <div class="text-start">
          <p>Product 2</p>
          <p>₱2,526.99 PHP$200</p>
        </div>
      </router-link>
      <router-link to="/productDetails" class="hover:underline">
        <div class=" overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110" src="../assets/cleanCollarNavy.png"
            alt="cleanCollarNavy">
        </div>
        <div class="text-start">
          <p>Product 3</p>
          <p>₱2,526.99 PHP</p>
        </div>
      </router-link>
      <router-link to="/productDetails" class="hover:underline">
        <div class=" overflow-hidden">
          <img class="transform transition duration-500 hover:scale-110" src="../assets/cleanCollarNavy.png"
            alt="Product 4">
        </div>
        <div class="text-start">
          <p>Product 4</p>
          <p>₱2,526.99 PHP</p>
        </div>
      </router-link>
    </div>
  </div>

</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import cleanCollarNavy from '../assets/cleanCollarNavy.png';
import cleanCollarWhite from '../assets/cleanCollarWhite.png';
import cleanCollarGray from '../assets/cleanCollarGray.png';
import cleanCollarDarkGray from '../assets/cleanCollarDarkGray.png';

const selectedColor = ref('Navy');
const selectedColorImage = computed(() => {
  switch (selectedColor.value) {
    case 'Navy':
      return cleanCollarNavy;

    case 'White':
      return cleanCollarWhite;

    case 'Gray':
      return cleanCollarGray;
    case 'Dark Gray':
      return cleanCollarDarkGray;
    default:
      return cleanCollarNavy;
  }
});
</script>