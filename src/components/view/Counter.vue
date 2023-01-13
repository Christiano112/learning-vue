<template>
    <div>
        <p v-html="msg"></p>
        <p>{{ counter }}</p>
        <button @click="increment">ADD</button>
        <button v-on:click="decrement">MINUS</button>
        <button @click="counter++">Counter++</button>
        <button @click="reset">RESET</button>
        <p v-text="text"></p>
    </div>
</template>

<script>

export default {
    name: "CounterApp",

    data() {
        return {
            counter: 0,
            text: "Its working",
            msg: "Welcome"
        }
    },

    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        reset() {
            this.counter = 0;
        },
    }
}

</script>

<style>
p {
    font-size: 3rem;
    color: blue;
}
</style>