<template>
  <div class="w-screen px-4 sm:px-10 md:px-20 lg:px-40">
    <div class="flex flex-col md:flex-row justify-evenly gap-10">
      <!-- CONTACT -->
      <div class="w-full">
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

              <!-- END DELIVERY -->
            </div>
            <div>

            </div>

          </div>
          <div>

          </div>
        </form>
      </div>
      <div class="w-full">

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


</script>
