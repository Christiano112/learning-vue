<template>
  <CounterApp />
  <myConditionals :tellThem="tell" />
  <ExtraPlay />
  <myLoops />
  <myTodo />
  <MyComponents />
</template>

<script>
import CounterApp from './components/Counter.vue';
import myConditionals from './components/Conditionals.vue';
import ExtraPlay from './components/Extra.vue';
import myLoops from "./components/Loop.vue";
import myTodo from "./components/Todo.vue";
import MyComponents from '../src/components/Components.vue';

export default {
  name: 'App',
  components: {
    CounterApp,
    myConditionals,
    ExtraPlay,
    myLoops,
    myTodo,
    MyComponents,
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
