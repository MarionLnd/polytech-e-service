<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import InstagramIcon from '@icons/InstagramIcon.vue'
import FacebookIcon from '@icons/FacebookIcon.vue'
</script>

<template>
  <footer class="flex justify-around p-6 bg-gradient-to-l from-white via-gray-100 to-blue-200">
    <div>
      <RouterLink to="/"><img src="/images/Logo - société.png" class="logo max-w-xs" /></RouterLink>
    </div>
    <div>
      <p>Plan du site</p>
      <ul>
        <li>Accueil</li>
        <li>À propos</li>
        <li>Solutions</li>
        <li>Réalisations</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="flex flex-row">
      <div>
        <RouterLink to="/"
          ><InstagramIcon
            class="w-10 h-10 hover:rounded-2xl hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-pink-900 hover:text-white"
        /></RouterLink>
        <RouterLink to="/"><FacebookIcon class="w-10 h-10 hover:fill-blue-500" /></RouterLink>
      </div>
      <MoonIcon class="h-10 w-10 text-black" />
      <SunIcon class="h-10 w-10 text-black" />
    </div>
  </footer>
</template>
