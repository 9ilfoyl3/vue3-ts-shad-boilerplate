<template>
  <div class="min-h-screen bg-background/80 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <h2 class="text-2xl font-bold mb-4">Counter Example</h2>
              <div class="flex items-center justify-center space-x-4">
                <button
                  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  @click="counterStore.decrement()"
                >
                  -
                </button>
                <span class="text-xl">{{ counterStore.count }}</span>
                <!-- <button
                  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  @click="counterStore.increment()"
                >
                  +
                </button> -->
                <Button>Click me</Button>
              </div>
              <p class="text-center mt-4">Double count: {{ counterStore.doubleCount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useCounterStore } from '@/stores'

const counterStore = useCounterStore()
</script>
