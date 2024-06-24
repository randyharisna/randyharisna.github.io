<template>
    <div class="bg-[#9106fd] p-5 rounded-xl h-full flex flex-row gap-5 text-[#f2f2f2] row-start-2 md:row-start-3 md:col-start-2">
      <!-- <div class="flex-grow flex flex-wrap justify-center gap-5">
        
      </div>
       -->
      <div class="flex basis-full">
        <div class="grid grid-cols-2 grid-rows-2 gap-5 justify-center items-center">
            <a href="https://www.instagram.com/randyhman/" class="flex justify-center items-center hover:animate-pulse">
                <font-awesome-icon :icon="['fab', 'instagram']" class="text-3xl font-bold md:text-5xl" />
            </a>
            <a href="https://wa.me/6287822894331" class="flex justify-center items-center hover:animate-pulse">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-3xl font-bold md:text-5xl" />
            </a>
            <a href="https://www.twitter.com/randyhman/" class="flex justify-center items-center hover:animate-pulse">
                <font-awesome-icon :icon="['fab', 'twitter']" class="text-3xl font-bold md:text-5xl" />
            </a>
            <a href="mailto:randyharisna@gmail.com" class="flex justify-center items-center hover:animate-pulse">
                <font-awesome-icon :icon="['far', 'envelope']" class="text-3xl font-bold md:text-5xl" />
            </a>
        </div>
      </div>
      <div class="flex basis-full justify-end">
        <div class="text-right text-3xl font-bold md:text-6xl mt-auto">
            Contact
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: "Contact",
    })
</script>