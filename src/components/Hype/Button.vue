<script setup lang="ts">
defineProps<{ disabled: boolean }>()
</script>

<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    class="px-6 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <slot />
  </button>
</template>

