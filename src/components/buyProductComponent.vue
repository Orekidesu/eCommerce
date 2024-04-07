<template>
  <div class="w-screen px-40 ">
    <div class="flex flex-col md:flex-row justify-evenly gap-10">
      <div class="w-full">
        <form action="">
          <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-2">
              <FormField name="email">
                <FormItem>
                  <FormLabel class="text-xl"><strong>Contact</strong></FormLabel>
                  <FormControl>
                    <input type="email" placeholder="email" class="rounded-sm w-full" />
                  </FormControl>
                  <div>
                    <Checkbox id="terms" />
                    <label for="terms"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email me with news and offers
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="flex flex-col gap-2">
              <FormField name="email">
                <FormItem>
                  <FormLabel class="text-xl"><strong>Delivery</strong></FormLabel>
                  <div>
                    <Select class="w-full">
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Country/Region" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="m@example.com">
                            Philippines
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>

          </div>
          <div>

          </div>
        </form>
      </div>
      <div class="w-full">2</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

</script>