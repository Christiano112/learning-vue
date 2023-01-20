<template>
    <div>
        <p>My age is {{ age }}</p>
        <button @click="age++">ADD</button>
        <button v-on:click.shift="decrement">MINUS</button>
        <p v-if="age > 16">Show Me</p>
        <button @click.once="age = 0">RESET</button>
        <input @keyup.enter.delete="age--" />

        <div>
            <p>{{ uppercase }}</p>
            <p>{{slice}}</p>
            <button :disabled="isDisabled" @click="alert">Button</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "ExtraPlay",

    data() {
        return {
            age: 16,
            name: "Chris",
            summary: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
            isDisabled: false,
        }
    },

    methods: {
        decrement() {
            this.age--;
        },

        alert() {
            alert(this.name);
        }
    },

    computed: {
        uppercase() {
            return this.name.toUpperCase();
        },

        slice() {
            return this.summary.slice(0, 9);
        }
    },

    watch: {
        age: function(oldAge, newAge) {
            console.log("oldAge: " + oldAge);
            console.log("newAge: " + newAge);
        }
    },

    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforeDestroy");
    },
    unmounted() {
        console.log("destroyed");
    },
}
</script>