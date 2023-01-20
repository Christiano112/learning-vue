<template>
    <div>
        <h1>VUEX STORE</h1>
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <button @click="increment(7)">ADD</button>
        <button @click="anotherAdd(2)">ADD One</button>
    </div>
</template>

<script>

export default {
    name: "VuexStore",

    methods: {
        increment(num) {
            this.$store.commit('myAdd', num)
        },
        anotherAdd(val) {
            this.$store.dispatch('asyncAdd', val)
        }
    },

    computed: {
        count() {
            return this.$store.state.myCount
        },
        doubleCount() {
            return this.$store.getters.doubleCount
        },
    }
}
</script>