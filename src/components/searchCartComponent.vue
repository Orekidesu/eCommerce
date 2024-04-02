<template>
  <div class="max-w-screen px-5 py-5 flex justify-end">
    <div class="relative">
      <button v-if="!showSearch" class="bg-transparent sm:text-sm rounded-lg focus:ring focus:border-accent"
        v-on:click="showSearch = true">
        <span class="material-symbols-outlined">
          search
        </span>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </button>
      <input v-if="showSearch"
        class="bg-transparent border border-primary sm:text-sm rounded-lg md:min-w-72 block focus:ring focus:border-accent pl-10"
        type="search" name="search" placeholder="Search product">
      <div v-if="showSearch" class="absolute left-2 top-1/2 transform -translate-y-1/2">
        <span class="material-symbols-outlined">
          search
        </span>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </div>
    </div>

    <div class="md:px-2 px-1 flex align-middle justify-center">
      <button class="focus:outline-none hover:bg-accent hover:text-accent-foreground">
        <span class="material-symbols-outlined">
          shopping_cart
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showSearch = ref(false);
</script>