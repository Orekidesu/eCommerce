<template>

  <div class="w-screen">
    <div class="flex flex-row justify-between w-screen px-6">
      <div>
        <h1 class="text-3xl font-bold">Your Cart</h1>
      </div>
      <router-link to="/products" class="hover:underline text-xs">continue shopping</router-link>
    </div>

    <div class="flex justify-center">
      <h1 class="text-xl font-bold">Your cart is currently empty...</h1>
    </div>
  </div>

</template>