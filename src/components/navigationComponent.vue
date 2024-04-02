<template>
  <nav class="bg-background border-border w-screen border-b-2">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 py-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/logo.png" class="h-8" alt="Brand Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </router-link>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover-bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
          <li>
            <router-link to="/" class="block py-2 px-3 hover:bg-accent hover:text-accent-foreground"
              aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/products"
              class="block py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground">Products</router-link>
          </li>
          <li>
            <router-link to="/contact"
              class="block py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground">Contact Us</router-link>
          </li>
          <li>
            <router-link to="/faqs"
              class="block py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground">FAQs</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite();
});
</script>