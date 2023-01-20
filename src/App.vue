<template>
  <myData />
  <!-- <myHeader /> -->
  <!-- <router-view></router-view> -->
</template>

<script>
// import myHeader from './components/Header.vue';
import myData from './components/Data.vue';

export default {
  name: 'App',
  components: {
    // myHeader,
    myData
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


:where(:root) {
  display: grid;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
