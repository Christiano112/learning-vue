<template>
  <CounterApp />
  <myConditionals :tellThem="tell" />
  <ExtraPlay />
</template>

<script>
import CounterApp from './components/Counter.vue';
import myConditionals from './components/Conditionals.vue';
import ExtraPlay from './components/Extra.vue';

export default {
  name: 'App',
  components: {
    CounterApp,
    myConditionals,
    ExtraPlay,
  },

  data() {
    return {
      tell: "This props stuff is working",
      myAge: 10,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
