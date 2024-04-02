<template>
  <div id="app">
    <NavigationView />
    <SearchCartView />
    <main class="main flex items-center justify-center w-100 h-100">
      <RouterView />
    </main>
    <FooterView />
  </div>

</template>

<script setup lang="ts">
import NavigationView from '@/views/navigationView.vue';
import FooterView from '@/views/footerView.vue';
import SearchCartView from './views/searchCartView.vue';
</script>