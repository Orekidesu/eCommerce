<template>

  <div class="w-screen flex flex-col justify-start">
    <div class="px-6  pb-10">
      <h1 class="text-3xl"><strong>Contact Us</strong></h1>
      <p class="text-lg">Have any questions? Contact us & receive a response within 1-2 business days!</p>
    </div>
    `<div class="w-screen flex justify-center">
      <div class="w-2/5">
        <form @submit="onSubmit">
          <div class="flex gap-3">
            <div class="w-3/4">
              <FormField v-slot="{ componentField }" name="name">
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter your name" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="w-3/4">
              <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </div>
          <div class="">
            <FormField v-slot="{ componentField }" name="phone">
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Enter your phone number" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="">
            <FormField v-slot="{ componentField }" name="comment">
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Input class="h-56" pe="text" placeholder="Enter your comment" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="flex justify-center pt-4"><Button class="w-1/4" pe="submit">
              Submit
            </Button></div>
        </form>
      </div>
    </div>`
  </div>


</template>


<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>
