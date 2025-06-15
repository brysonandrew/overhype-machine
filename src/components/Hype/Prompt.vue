<script setup lang="ts">
defineProps<{ prompt: string }>();
const emit = defineEmits<{
  (e: 'update:prompt', value: string): void;
  (e: 'submit'): void;
}>();

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    emit('submit');
  }
};
</script>

<template>
  <textarea
    :value="prompt"
    @input="(e) => $emit('update:prompt', (e.target as HTMLTextAreaElement).value)"
    @keydown="handleKeyDown"
    rows="4"
    class="w-full p-4 rounded-2xl shadow-inner bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none ring-1 dark:ring-purple-200 focus:ring-2 focus:ring-purple-500 resize-none transition"
    placeholder="Enter your hype prompt..."
  />
</template>
