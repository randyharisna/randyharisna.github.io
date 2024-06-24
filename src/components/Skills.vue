<template>
  <div v-if="isMin" class="text-3xl font-bold bg-[#f2f2f2] p-5 rounded-xl md:row-span-2 md:text-6xl">
    <!-- Title & Icon -->
    <div class="flex">
      <div class="w-full">
        Skills
          <router-link to="/Skills" class="float-right hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 md:size-16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
          </router-link>
      </div>
    </div>

    <!-- Skill category & list -->

    <div class="flex flex-col w-full h-1/2 py-5 font-GeistMono md:text-xl text-sm overflow-y-scroll">
      <!-- Display current skill category -->
      <p>{{ currentSkillCategory.name }}</p>
      
      <!-- Display skills as comma-separated string with links -->
      <p>
        <template v-for="(skill, index) in currentSkillCategory.skills" :key="index">
          <a>{{ skill.name }}</a>{{ index < currentSkillCategory.skills.length - 1 ? ', ' : '' }}
        </template>
      </p>
      
    </div>

    <!-- Button to cycle through skill categories -->
    <button @click="cycleSkills" class="bg-[#9106fd] flex w-full mt-5 p-1 rounded-xl justify-center text-[#f2f2f2] font-GeistMono md:text-xl text-sm align-text-bottom hover:animate-pulse">Next Category</button>
  
  </div>
  <div v-else class="bg-[#202020] p-5 w-screen h-screen">
    <div class="bg-[#f2f2f2] rounded-xl flex justify-between items-center p-5 float-end">
      <div>
        <!-- Add other navigation links or logo here -->
      </div>
      <router-link to="/" class="hover:animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Skill {
  name: string;
  progress: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

export default defineComponent({
  name: 'Skills',
  props: {
    isMin: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const skillCategories = ref<SkillCategory[]>([
      {
        name: 'Coding Skills',
        skills: [
          { name: 'C++', progress: 80 },
          { name: 'CSS', progress: 75 },
          { name: 'HTML', progress: 80 },
          { name: 'Java', progress: 80 },
          { name: 'JS', progress: 80 },
          { name: 'MySQL', progress: 80 },
          { name: 'Python', progress: 80 },
          { name: 'Tailwind CSS', progress: 80 },
          { name: 'TS', progress: 80 },
          { name: 'Vue', progress: 80 },
        ]
      },
      {
        name: 'Design Skills',
        skills: [
          { name: 'Adobe Illustrator', progress: 90 },
          { name: 'Adobe Photoshop', progress: 75 },
          { name: 'Blender', progress: 75 },
          { name: 'Figma', progress: 75 },
          { name: 'Inkscape', progress: 75 },
        ]
      },
    ]);

    const currentCategoryIndex = ref(0);

    const currentSkillCategory = ref<SkillCategory>(skillCategories.value[currentCategoryIndex.value]);

    const cycleSkills = () => {
      currentCategoryIndex.value = (currentCategoryIndex.value + 1) % skillCategories.value.length;
      currentSkillCategory.value = skillCategories.value[currentCategoryIndex.value];
    };

    return {
      currentSkillCategory,
      cycleSkills,
    };
  },
});
</script>