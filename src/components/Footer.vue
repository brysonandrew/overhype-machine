<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.preference === 'dark')

const toggleDarkMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <footer class="w-full flex items-center mt-10">
    <button
      @click="toggleDarkMode"
      class="aspect-square w-12 bg-neutral-200 dark:bg-neutral-900 p-2 rounded-full shadow hover:shadow-lg transition"
    >
      <span v-if="isDark">🌙</span>
      <span v-else>☀️</span>
    </button>
  </footer>
</template>
