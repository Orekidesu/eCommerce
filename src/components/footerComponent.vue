<template>
  <div class="bottom-0 w-full mt-20 border border-b-0 border-t-4 flex justify-evenly">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
      <div>
        <h1 class="pb-2.5"><strong> Quick Links</strong></h1>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Refund Policy</p>
        <p>FAQs</p>
      </div>
      <div>
        <h1 class="pb-2.5"><strong> Social Media</strong></h1>
        <div class="flex flex-row pb-2">
          <Facebook color="blue" :size="24" />
          <span>Facebook</span>
        </div>
        <div class="flex flex-row">
          <Instagram color="#f26c0d" :size="24" />
          <span> Instagram</span>
        </div>

      </div>
      <div>
        <h1 class="pb-2.5"><strong>Our Mission</strong></h1>
        <p>To provide quality products</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Facebook } from 'lucide-vue-next';
import { Instagram } from 'lucide-vue-next';
</script>