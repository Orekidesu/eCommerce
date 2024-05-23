<template>


  <div class="px-6">
    <h1 class="xl:text-4xl md:text-3xl text-2xl"><Strong>All Products</Strong></h1>
  </div>

  <div class="grid md:grid-cols-4 grid-cols-2 gap-4 px-4 py-10">
    <!-- make a list of images -->
    <router-link to="/productDetails" class="hover:underline">
      <div class="overflow-hidden">
        <img class=" w-full h-44 md:h-96 transform transition duration-500 hover:scale-110  "
          src="../assets/cleanCollarGray.png" alt="cleanCollar">
      </div>
      <div class="text-start">
        <p class="">
          CleanCollar Men's Shirt</p>
        <p>₱2,526.99 PHP</p>
        <p class="flex flex-ro`w">
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
        </p>
      </div>
    </router-link>
    <router-link to="/productDetails" class="hover:underline">
      <div class=" overflow-hidden">
        <img class="w-full h-44 md:h-96 transform transition duration-500 hover:scale-110"
          src="../assets/thermalJacket.png" alt="thermal jacket">
      </div>
      <div class="text-start">
        <p>Thermal Jacket</p>
        <p>₱6,475.99 PHP</p>
        <p class="flex flex-row">
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
        </p>
      </div>
    </router-link>
    <router-link to="/productDetails" class="hover:underline">
      <div class=" overflow-hidden">
        <img class=" w-full h-44 md:h-96 transform transition duration-500 hover:scale-110" src="../assets/luxPlaid.png"
          alt="luxpLaid">
      </div>
      <div class="text-start">
        <p>LuxPLaid Shirt for men</p>
        <p>₱1,999.99 PHP</p>
        <p class="flex flex-row">
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
        </p>

      </div>
    </router-link>
    <router-link to="/productDetails" class="hover:underline">
      <div class=" overflow-hidden">
        <img class=" w-full h-44 md:h-96 transform transition duration-500 hover:scale-110"
          src="../assets/fluffJacket.png" alt="Product 4">
      </div>
      <div class="text-start">
        <p>Fluf Jacket</p>
        <p>₱4,896.99 PHP</p>
        <p class="flex flex-row">
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
          <Star :size="20" color="#c8ff00" :stroke-width="1.5" fill="#c8ff00" />
        </p>
      </div>
    </router-link>

  </div>

</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';
</script>