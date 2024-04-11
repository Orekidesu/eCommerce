<template>
  <div class="w-screen px-4 sm:px-10 md:px-20 lg:px-40">
    <!-- <div class="w-screen"> -->
    <div class="flex flex-col md:flex-row justify-evenly gap-10">
      <!-- CONTACT -->
      <!-- FIRST COLUMN -->
      <div class="w-full">
        <!-- <div class="w-full px-20 "> -->
        <form action="">
          <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-col gap-2">
              <FormField name="email">
                <FormItem>
                  <FormLabel class="text-xl"><strong>Contact</strong></FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email" class="rounded-sm w-full" />
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
            <!-- END CONTACT -->

            <!-- DELIVERY -->
            <div class="flex gap-2 flex-col">
              <div class="flex flex-col gap-2">
                <div>
                  <FormField name="delivery">
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
                              <SelectItem value="PH">
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
              <div class="flex flex-col sm:flex-row gap-2">
                <div class="w-full">
                  <FormField name="firstname">
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="First Name" class="rounded-sm w-full" />
                      </FormControl>
                    </FormItem>
                  </FormField>
                </div>
                <div class="w-full">
                  <FormField name="lastname">
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="Last Name" class="rounded-sm w-full" />
                      </FormControl>
                    </FormItem>
                  </FormField>
                </div>
              </div>
              <div>
                <FormField name="barangay">
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="Barangay" class="rounded-sm w-full" />
                    </FormControl>
                  </FormItem>
                </FormField>

              </div>
              <div>
                <div class="flex flex-col sm:flex-row gap-2">
                  <div class="w-full">
                    <FormField name="postal code">
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="Postal Code" class="rounded-sm w-full" />
                        </FormControl>
                      </FormItem>
                    </FormField>
                  </div>
                  <div class="w-full">
                    <FormField name="city">
                      <FormItem>
                        <FormControl>
                          <Input type="text" placeholder="City" class="rounded-sm w-full" />
                        </FormControl>
                      </FormItem>
                    </FormField>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 flex-col">
                <div>
                  <FormField name="region">
                    <FormItem>
                      <Select class="w-full">
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="cebu">
                              Cebu
                            </SelectItem>
                            <SelectItem value="palawan">
                              Palawam
                            </SelectItem>
                            <SelectItem value="leyte">
                              Leyte
                            </SelectItem>
                            <SelectItem value="southern leyte">
                              Southern Leyte
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                </div>
              </div>
              <div>
                <FormField name="phone">
                  <FormItem>
                    <FormControl>
                      <div style="position: relative;">
                        <Input type="text" placeholder="Phone" class="rounded-sm w-full" style="padding-right: 30px;" />
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle :size="20" :stroke-width="1" />
                                </TooltipTrigger>
                                <TooltipContent class="bg-accent text-accent-foreground">
                                  incase we need to contact you about your order </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>

                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>

              <div>
                <Checkbox id="terms" />
                <label for="terms"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Save this information for next time
                </label>
              </div>

              <!-- Delivery (Shipping Method) -->

              <div>
                <FormField name="shipping">
                  <FormItem>
                    <FormLabel class="text-sm"><strong>Shipping Method</strong></FormLabel>
                    <div class="relative">
                      <FormControl>
                        <Input type="text" class="bg-accent text-primary-foreground rounded-sm w-full" disabled
                          placeholder="Free Shipping" />
                        <div class="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <Car />

                        </div>

                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>

              <!-- End Delivery (Shipping Method) -->
              <!-- END DELIVERY -->

            </div>
            <!-- PAYMENT METHOD -->
            <div>
              <FormField name="shipping">
                <FormItem>
                  <FormLabel class="text-xl"><strong>Payment</strong></FormLabel>
                  <FormControl>
                    <RadioGroup v-model="selectedValue">
                      <div class="border p-4 rounded m-0 relative"
                        :class="{ 'bg-accent text-accent-foreground': selectedValue === 'default' }"
                        @click="selectValue('default')">
                        <div class="flex items-center space-x-2">
                          <RadioGroupItem id="r1" value="default" />
                          <Label for="r1">Via GCash</Label>
                          <div class="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <img src="../assets/gcash.svg" alt="gcash icon" class="h-6 w-6" style="color: #0079f6;" />
                          </div>
                        </div>
                      </div>
                      <div class="border p-4 rounded m-0 relative "
                        :class="{ 'bg-accent text-accent-foreground': selectedValue === 'comfortable' }"
                        @click="selectValue('comfortable')">
                        <div class="flex items-center space-x-2">
                          <RadioGroupItem id="r2" value="comfortable" />
                          <Label for="r2">Cash On Delivery (COD)</Label>
                          <div class="absolute right-2 top-1/2 transform -translate-y-1/2">
                            <HandCoins />
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <!-- END PAYMENT METHOD -->
            <!-- CHECKOUT -->
            <div>
              <div class="flex justify-start w-full">
                <button
                  class=" w-full border border-primary bg-secondary text-secondary-foreground py-2 rounded-sm hover:bg-primary hover:text-primary-foreground">
                  Complete Order madapaker</button>
              </div>
            </div>
            <!-- END CHECKOUT -->
          </div>

        </form>
      </div>
      <!-- END FIRST COLUMN -->

      <!-- SECOND COLUMN -->
      <div class="w-full">
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <div class="flex flex-row justify-start gap-2">
              <img src="../assets/cleanCollarDarkGray.png" class="h-20 w-20" alt="">
              <div class="flex flex-col justify-start">
                <div class="text-base">CleanCollar Men's Shirt</div>
                <div class="text-xs">Navy / XS </div>
              </div>
            </div>
            <div>₱1,500 PHP</div>
          </div>
          <br>
          <div class="flex flex-row justify-between">
            <div>Subtotal</div>
            <div class="font-bold">₱1,500 PHP</div>
          </div>
          <div class="flex flex-row justify-between">
            <div>Shipping</div>
            <div class="font-bold">Free</div>
          </div>
          <div class="flex flex-row justify-between">
            <div class="text-xl font-bold">Total</div>
            <div class="text-xl font-bold">₱1,500 PHP</div>
          </div>
        </div>
      </div>
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-vue-next';
import { Car } from 'lucide-vue-next';
import { HandCoins } from 'lucide-vue-next';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ref } from 'vue';
let selectedValue = ref('comfortable');

const selectValue = (value: string) => {
  selectedValue.value = value;
};

</script>
