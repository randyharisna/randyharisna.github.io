<template>
  <div class="grid grid-rows-3 md:grid-rows-4 grid-cols-3 bg-[#f2f2f2] p-5 rounded-xl md:col-span-2 md:row-span-2">
    <!-- Profile Image -->
    <div class="col-start-3 row-start-1 row-span-2 md:row-span-4 bg-right-top bg-contain bg-no-repeat bg-[url('/src/assets/randy.png')]">
    </div>
    <!-- Name -->
    <div class="text-3xl col-span-2 font-Geist font-bold md:text-6xl md:row-start-1">
      Randy H. Mahsa
    </div>
    <!-- Tagline with Typewriter Animation -->
    <div class="text-xl col-span-2 font-GeistMono md:text-3xl overflow-hidden whitespace-nowrap">
      <span id="typewriter">{{ typewriterText }}</span>
    </div>
    <!-- Description -->
    <div class="row-span-1 md:row-span-2 col-span-3 md:col-span-2 font-GeistMono md:text-xl text-xs flex items-end">
      With a balanced approach to programming
      and design, I seamlessly blend artistic
      vision with practical functionality.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Profile',
  setup() {
    const typewriterText = ref<string>('');

    const words = ['design', 'code', 'communicate'];
    function typeWriter(text: string, speed: number) {
      let charIndex = 1;
      typewriterText.value = "i ";
      const typingInterval = setInterval(() => {
        if (charIndex <= text.length) {
          typewriterText.value += text.charAt(charIndex - 1);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            typeWriter(nextWord(), speed);
          }, 5000);
        }
      }, speed);
    }

    function nextWord() {
        const currentWordIndex = words.indexOf(typewriterText.value.trim().slice(2));
        const nextWordIndex = (currentWordIndex + 1) % words.length;
        return words[nextWordIndex];
    }

    onMounted(() => {
        typeWriter(words[0], 100);
    });

    return {
        typewriterText
    };
  }
});
</script>
