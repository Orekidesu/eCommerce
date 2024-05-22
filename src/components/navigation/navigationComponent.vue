<template>
  <nav class="bg-background border-border w-screen border-b-2">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 py-4">
      <router-link to="/dashboard" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../../assets/logo3.svg" class="h-14" alt="Brand Logo" />
        <h1>
          <i>BADO CLOTHING</i>
        </h1>
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
        <div>
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <router-link to="/dashboard" class="block py-2 px-3 hover:bg-accent hover:text-accent-foreground"
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

            <li v-if="isLoggedIn" class="relative group md:hidden">
              <router-link to=""
                class="block py-2 px-3 cursor-pointer rounded hover:bg-accent hover:text-accent-foreground"
                @click="logout">
                <span class="block py-2 px-3 ml-2">Logout</span>
                <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <LogOut :size="20" :stroke-width="1.75" />
                </div>
              </router-link>
            </li>
            <li v-else class="relative group md:hidden">
              <router-link to=""
                class="block py-2 px-3 cursor-pointer rounded hover:bg-accent hover:text-accent-foreground"
                @click="login">
                <span class="block py-2 px-3 ml-2">Sign in</span>
                <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <LogIn :size="20" :stroke-width="1.75" />
                </div>
              </router-link>
            </li>
            <li class="relative group hidden md:block">
              <span class="block py-2 px-3 cursor-pointer rounded hover:bg-accent hover:text-accent-foreground">
                <CircleUserRound />
              </span>
              <ul
                class="absolute left-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white h-full ring-0 ring-opacity-5 transition ease-out duration-100 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 origin-top-left z-10">
                <li v-if="isLoggedIn"
                  class="flex justify-center cursor-pointer rounded hover:bg-accent hover:text-accent-foreground"
                  @click="logout">
                  <span class="block py-2 px-4">Logout</span>
                  <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <LogOut :size="20" :stroke-width="1.75" />
                  </div>
                </li>
                <li v-else
                  class="flex justify-center cursor-pointer rounded hover:bg-accent hover:text-accent-foreground"
                  @click="login">
                  <span class="block py-2 px-4">Sign In</span>
                  <div class="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <LogIn :size="20" :stroke-width="1.75" />
                  </div>
                </li>
              </ul>
            </li>

          </ul>

        </div>

      </div>
    </div>

  </nav>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import { onMounted, ref, watchEffect } from 'vue';
import { CircleUserRound, LogOut, LogIn } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { authController } from '../../controllers/logoutController.ts';
import { auth } from '@/data/repository/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const router = useRouter();
const isLoggedIn = ref(false);

const logout = async () => {
  const result = await authController.logout();
  if (result) {
    alert("You have been logged out.");
    router.push('/'); // replace with your login route
    isLoggedIn.value = false;
  }
};

const login = () => {
  router.push('/'); // replace with your login route
};

onMounted(() => {
  initFlowbite();

  watchEffect(() => {
    onAuthStateChanged(auth, (user) => {
      isLoggedIn.value = !!user;
    });
  });
});
</script>