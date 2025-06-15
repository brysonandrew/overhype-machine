<script setup lang="ts">
const { prompt, isLoading, typedOutput, click } = useHypeClick();
</script>
<template>
  <div
    class="flex flex-col items-stretch gap-6  min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 p-6 transition"
  >
    <Header />
    <Hr/>
    <div class="flex flex-col items-center justify-center gap-6 grow">
      <HypePrompt
        v-model:prompt="prompt"
        @submit="click"
      />
      <HypeButton
        :disabled="isLoading"
        @click="click"
      >
        {{ isLoading ? 'Generating...' : 'Generate Hype 🚀' }}
      </HypeButton>
      <HypeResult :text="typedOutput" />
    </div>
    <Footer/>
  </div>
</template>
