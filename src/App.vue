<template>
  <router-view />
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
      Home,
  },
}
</script>

<style scoped>
/* You can add additional custom styles here if needed */
</style>
