import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
<script setup lang="ts">
import ContactForm from '@components/ContactForm.vue'
</script>

<template>
  <div class="flex flex-col container mx-auto">
    <div class="flex flex-row divide-x p-2 justify-center">
      <div class="p-8">
        <ContactForm />
      </div>
      <div class="calendly-container p-8">CALENDLY</div>
    </div>
  </div>
</template>

<style>
.form-container,
.calendly-container {
  width: 50em;
}
</style>
