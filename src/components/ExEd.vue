<template>
    <div v-if="isMin" class="text-3xl font-bold flex justify-start items-end bg-[#f2f2f2] p-5 rounded-xl md:text-6xl md:col-span-2">
      <div class="w-full">
        Experience & Education
        <router-link to="/ExperienceEducation" class="float-right hover:animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 md:size-16">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </router-link>
      </div>
    </div>
    <div v-else class="bg-[#202020] p-5 w-screen h-screen">
      <div class="bg-[#f2f2f2] rounded-xl flex justify-between items-center p-5 float-end">
        <div>
          <!-- Add other navigation links or logo here -->
        </div>
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
          </svg>
        </router-link>
      </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent} from 'vue';
    export default defineComponent({
        name: 'ExEd',
        props: {
        isMin: {
          type: Boolean,
          default: false,
        },
      },
    })
</script>