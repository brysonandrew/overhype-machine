import { ref } from 'vue'

export const useTypewriter = () => {
  const typedOutput = ref('')
  const typingIndex = ref(0)

  const animateTyping = (text: string) => {
    typedOutput.value = ''
    typingIndex.value = 0
    const interval = setInterval(() => {
      if (typingIndex.value < text.length) {
        typedOutput.value += text[typingIndex.value]
        typingIndex.value++
      } else {
        clearInterval(interval)
      }
    }, 20)
  }

  return { typedOutput, animateTyping }
}
