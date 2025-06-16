<script setup lang="ts">
const { prompt, isLoading, typedOutput, click } = useHypeClick();
</script>
<template>
  <div class="flex flex-col w-full items-center">
    <div
      class="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 transition"
    />
    <div class="relative flex flex-col justify-stretch min-h-screen gap-6 p-6">
      <Header />

      <!-- <Hr /> -->

      <Container class="grow">
        <div class="flex flex-col items-end justify-center gap-12 py-4 grow">
          <HypePrompt
            v-model:prompt="prompt"
            @submit="click"
          />
          <HypeButton
            :is-loading="isLoading"
            :is-empty="!prompt"
            @click="click"
          >
            {{ isLoading ? 'Generating...' : 'Let\'s go' }}
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4"
                />
              </svg>
            </template>
          </HypeButton>
        </div>
      </Container>
    </div>
    <Footer />
  </div>
</template>
