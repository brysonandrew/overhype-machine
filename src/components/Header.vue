<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
.animate-pulse {
  animation: pulse 2s infinite;
}
</style>

<script setup lang="ts">
</script>

<template>
  <header class="w-full flex flex-col justify-between items-center lg:flex-row">
    <h1 class="text-9xl font-bold text-neutral-800 dark:text-neutral-100 animate-pulse">
      Hype Machine
    </h1>
  </header>
</template>