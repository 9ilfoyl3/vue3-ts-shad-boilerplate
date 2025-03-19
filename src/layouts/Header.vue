<script setup lang="ts">
import ThemeSwitcher from '@/components/theme-switcher/Theme-Switcher.vue'
import { ref } from 'vue'

const appTitle = ref(import.meta.env.VITE_APP_TITLE || 'App Title')
</script>

<template>
  <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
    <div class="container flex h-14 max-w-screen-2xl items-center">
      <!-- header left part -->
      <div class="mr-4 md:mr-1 hidden md:flex">
        <a href="/" class="mr-4 md:mr-2 lg:mr-6 flex items-center lg:space-x1 xl:space-x-2">
          <span class="font-bold">{{ appTitle }}</span>
        </a>
      </div>

      <!-- header right part -->
      <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <nav class="flex items-center">
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
