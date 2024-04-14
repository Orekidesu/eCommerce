<template>
  <div class="w-screen ">
    <div class=" flex flex-col md:flex-row justify-center max-w-screen gap-4 px-6">
      <div class="w-full md:w-1/2 flex  flex-col justify-center gap-2">
        <div>
          <!--Main Image-->
          <img :src="mainImage" alt="" class=" border-8">
        </div>
        <div class="grid grid-cols-2 w-full gap-2">
          <img v-for="color in colors" :src="images[color]" :alt="color"
            class="w-full h-full sm:w-80 sm:h-80 object-cover">
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="xl:text-5xl md:text-4xl text-3xl">CleanCollar Men's Shirt</div>
        <div>
          <p>₱2,526.99 PHP</p>
        </div>
        <p><strong>Color</strong></p>
        <select v-model="selectedColor" name="" id="" class="bg-transparent border border-primary sm:text-sm rounded-lg w-40 block p-2.5 focus:ring
        focus:border-accent">
          <option v-for="color in colors" :value="color">{{ color }}</option>
        </select>
        <p><strong>Size</strong></p>
        <select v-model="selectedColor" name="" id="" class="bg-transparent border border-primary sm:text-sm rounded-lg w-40 block p-2.5 focus:ring
        focus:border-accent">
          <option v-for="color in colors" :value="color">{{ color }}</option>
        </select>
        <p><strong>Quantity</strong></p>
        <input class="rounded-lg w-40" type="number" name="" id="" value="1">
        <div class="w-full">
          <div class="flex justify-start w-4/5">
            <button
              class=" w-full border border-primary bg-secondary text-secondary-foreground py-2 rounded-sm hover:bg-primary hover:text-primary-foreground">
              Add
              to Cart</button>
          </div>
          <div class="flex flex-row pt-2 w-4/5 justify-between">
            <div class="flex flex-col justify-center items-center">
              <Car :stroke-width="1" />
              <p class="text-xs">Nationwide Shipping</p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <RotateCcw :stroke-width="1" />
              <p class="text-xs">30 Day Return</p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <CreditCard :stroke-width="1" />
              <p class="text-xs">Secure Checkout</p>
            </div>
          </div>


          <!-- Main description -->
          <div class="w-full pt-8 flex flex-col gap-3">
            <div>
              <p class="w-9/12 text-sm">Ditch the bulky button-down! Our CleanCollar Men's Shirt combines clean design
                with
                all-day comfort. It's perfect for the modern guy who wants to look sharp without sacrificing ease.</p>
            </div>

            <!-- Sub description -->
            <div>
              <ul class="list-disc text-sm list-inside">
                <li>High Quality Cotton</li>
                <li>Breathable Material</li>
                <li>Modern Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { storage } from '../data/repository/firebaseConfig.ts';

const colors = ['Navy', 'Gray', 'Dark Gray', 'White'];
const selectedColor = ref(colors[0]);
const images = ref<Record<string, string>>({}); // Specify the type of the object
const mainImage = ref('');

onMounted(async () => {
  const storedImages = sessionStorage.getItem('images');
  if (storedImages) {
    images.value = JSON.parse(storedImages);
  } else {
    for (const color of colors) {
      const imageRef = storageRef(storage, `products/mens/clean_collar/${color}.png`);
      const imageUrl = await getDownloadURL(imageRef);
      images.value[color] = imageUrl;
    }
    sessionStorage.setItem('images', JSON.stringify(images.value));
  }
  mainImage.value = images.value[selectedColor.value];
});

watch(selectedColor, (newColor) => {
  mainImage.value = images.value[newColor];
  console.log(mainImage.value); // Print the image URL to the console
});
</script>