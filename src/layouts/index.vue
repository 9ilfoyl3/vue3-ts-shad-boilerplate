<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="flex-1 container py-6">
      <router-view />
    </main>
  </div>
</template>
