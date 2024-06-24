<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
  <div class="flex md:h-screen md:w-screen items-center justify-center bg-[#0d0d0d] p-5">
    <div class="grid h-full w-full gap-5 md:grid-cols-3 md:grid-rows-4">
      <Profile />
      <Projects :isMin="true"/>
      <Skills :isMin="true"/>
      <Contact />
      <ExEd :isMin="true"/>
    </div>
  </div>
</template>

<script>
import Profile from './Profile.vue';
import Projects from './Projects.vue';
import Skills from './Skills.vue';
import Contact from './Contact.vue';
import ExEd from './ExEd.vue';

export default {
  name: 'Home',
  components: {
    Profile,
    Projects,
    Skills,
    Contact,
    ExEd,
  },
}
</script>