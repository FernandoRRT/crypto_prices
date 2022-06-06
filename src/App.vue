<template>
  <TopBar />
  <router-view />
</template>


<script>
import TopBar from "./components/TopBar.vue";
export default {
  name: 'App',
  components: {
    TopBar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,300;8..144,400;8..144,700&family=Roboto:wght@300;400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: "Roboto", sans-serif;
}

</style>


