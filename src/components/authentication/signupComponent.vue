<template>
  <Card class="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle class="text-xl">
        Sign Up
      </CardTitle>
      <CardDescription>
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="submitForm">
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="first-name">First name</Label>
              <Input v-model="firstName" id="first-name" placeholder="Max" required />
            </div>
            <div class="grid gap-2">
              <Label for="last-name">Last name</Label>
              <Input v-model="lastName" id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input v-model="email" id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input v-model="password" id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full">
            Create an account
          </Button>

        </div>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <router-link to="/" class="underline">
            Sign in
          </router-link>
        </div>
      </form>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSignupController } from '@/controllers/signupController';

const { firstName, lastName, email, password, submitForm } = useSignupController();
</script>