<template>

  <div class="w-screen">
    <div class="flex flex-row w-screen justify-between md:px-20 px-2">
      <div>
        <h1 class="text-3xl font-bold">Your Cart</h1>
      </div>
      <router-link to="/products" class="hover:underline text-xs">continue shopping</router-link>
    </div>
    <div class="flex md:flex-row flex-col md:justify-between px-6 md:px-32 pt-10 gap-4">
      <div class="w-full flex flex-row gap-4">
        <div class="h-28 w-28">
          <img src="../assets/cleanCollarDarkGray.png" alt="">
        </div>
        <div class="flex flex-col gap-2">
          <div>
            <p><strong class="text-xs">
                CleanCollar Men's Shirt</strong></p>
          </div>
          <div>
            <p class="text-xs">Color: Navy</p>
          </div>
          <div>
            <p class="text-xs">Men's Size: S</p>
          </div>
        </div>


      </div>
      <div class="flex flex-row justify-between w-full">
        <div>
          <Input type="number" placeholder="1" class="w-24" />
        </div>
        <div>
          <p class="text-sm"><strong>₱1,500 PHP</strong></p>
        </div>
      </div>
    </div>
    <div class="flex  md:justify-end justify-center md:px-20 w-full pt-6">
      <div class="flex flex-col gap-4 md:items-end items-center">
        <p><strong>Subtotal :</strong> ₱1,500 PHP</p>
        <p class="text-xs"> Taxes and shipping calculated at checkout</p>

        <router-link to="/buyProduct"><Button class="w-60 ">Checkout</Button></router-link>
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import { Input, } from './ui/input';
import { Button } from './ui/button';



</script>