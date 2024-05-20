<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-gradient-to-r from-white via-gray-100 to-blue-200">
    <nav class="flex justify-between">
      <div class="ml-4">
        <RouterLink to="/"
          ><img :src="'/images/Logo - société.png'" class="logo max-w-xs"
        /></RouterLink>
      </div>

      <div class="self-center mr-4">
        <RouterLink
          to="/about"
          class="mr-4 p-3 text-gray-600 text-base font-bold tracking-wider rounded-2xl uppercase hover:text-blue-500 hover:bg-gray-100"
          >À propos</RouterLink
        >
        <RouterLink
          to="/solutions"
          class="mr-4 p-3 text-gray-600 text-base font-bold tracking-wider rounded-2xl uppercase hover:text-blue-500 hover:bg-gray-100"
          >Solutions</RouterLink
        >
        <RouterLink
          to="/realisations"
          class="mr-4 p-3 text-gray-600 text-base font-bold tracking-wider rounded-2xl uppercase hover:text-blue-500 hover:bg-gray-100"
          >Réalisations</RouterLink
        >
        <RouterLink
          to="/contact"
          class="mr-4 p-3 text-gray-600 text-base font-bold tracking-wider rounded-2xl uppercase hover:text-blue-500 hover:bg-gray-100"
          >Contact</RouterLink
        >
      </div>
    </nav>
  </div>
</template>

<style>
.logo {
  width: 8em;
}
</style>
