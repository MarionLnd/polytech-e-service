<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@components/HeaderComponent.vue'
import Footer from '@components/FooterComponent.vue'
</script>

<template>
  <Header />

  <RouterView />

  <Footer />
</template>

<!-- TODO Make a reset and common style for all the pages -->
<style scoped></style>
