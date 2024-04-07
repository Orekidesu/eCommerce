<template>
  <div class="w-screen ">
    <div class=" flex flex-col md:flex-row justify-center max-w-screen gap-4 px-6">
      <div class="w-full md:w-1/2 flex  flex-col justify-center gap-2">
        <div>
          <!--Main Image-->
          <img :src="mainImage" alt="" class=" border-8">
        </div>
        <div class="grid grid-cols-2 w-full gap-2">
          <img v-for="image in images" :src="image.src" :alt="image.color"
            class="w-full h-full sm:w-80 sm:h-80 object-cover">
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="xl:text-5xl md:text-4xl text-3xl">CleanCollar Men's Shirt</div>
        <div>
          <p>₱2,526.99 PHP</p>
        </div>
        <p><strong>Color</strong></p>
        <!-- <select v-model="selectedColor"> -->
        <select v-model="selectedColor" name="" id="" class="bg-transparent border border-primary sm:text-sm rounded-lg w-40 block p-2.5 focus:ring
        focus:border-accent">
          <option v-for="image in images" :value="image.color">{{ image.color }}</option>
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

          <div class="w-full pt-8 flex flex-col gap-3">
            <div>
              <p class="w-9/12 text-sm">Ditch the bulky button-down! Our CleanCollar Men's Shirt combines clean design
                with
                all-day comfort. It's perfect for the modern guy who wants to look sharp without sacrificing ease.</p>
            </div>

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
import { ref, computed, watch } from 'vue';
import { Car } from 'lucide-vue-next';
import { CreditCard } from 'lucide-vue-next';
import { RotateCcw } from 'lucide-vue-next';

import NavyImage from '../assets/cleanCollarNavy.png';
import WhiteImage from '../assets/cleanCollarWhite.png';
import GrayImage from '../assets/cleanCollarGray.png';
import DarkGrayImage from '../assets/cleanCollarDarkGray.png';

const images = ref([
  { color: 'Navy', src: NavyImage },
  { color: 'White', src: WhiteImage },
  { color: 'Gray', src: GrayImage },
  { color: 'Dark Gray', src: DarkGrayImage },
]);

const selectedColor = ref(images.value[0].color);

const mainImage = computed(() => {
  const selectedImage = images.value.find(image => image.color === selectedColor.value);
  return selectedImage ? selectedImage.src : '';
});

const swapImages = () => {
  const mainImageIndex = images.value.findIndex(image => image.color === selectedColor.value);
  if (mainImageIndex > -1) {
    const temp = images.value[0];
    images.value[0] = images.value[mainImageIndex];
    images.value[mainImageIndex] = temp;
  }
};

watch(selectedColor, () => {
  swapImages();
});
</script>