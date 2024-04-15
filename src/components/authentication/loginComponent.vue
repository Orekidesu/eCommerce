<template>
  <div class="w-full lg:grid lg:grid-cols-2 gap-10">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">
            Login
          </h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form class="grid gap-4" @submit.prevent="submitForm">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input v-model="email" id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="/" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input v-model="password" id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full">
            Login
          </Button>

          <div class="relative">
            <Button variant="outline" class="w-full" @click="loginWithGoogle">
              Login with Google
            </Button>
            <div class="absolute left-20 top-1/2 transform -translate-y-1/2 h-6 w-6">
              <img src="../../assets/google.png" alt="google icon">
            </div>

          </div>
        </form>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <router-link to="/signup" class="underline">
            Sign up
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden lg:block w-full">
      <div class="">
        <Carousel class="relative">
          <CarouselContent>
            <CarouselItem v-for="(_, index) in 5" :key="index">
              <div class="p-1">
                <Card class="h-full">
                  <CardContent class="flex aspect-square items-center justify-center ">
                    <img src="../../assets/cleanCollarDarkGray.png" alt="">
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="absolute left-10 top-1/2 transform -translate-y-1/2" />
          <CarouselNext class="absolute right-10 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useLoginController } from '@/controllers/loginController';


const { email, password, submitForm, loginWithGoogle } = useLoginController();

</script>