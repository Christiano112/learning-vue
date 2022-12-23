<template>
    <div>
        <div v-for="players in myArray" :key="players.id">
            <ul>
                <li>My Name is {{ players.name }}</li>
                <li>My Age is {{ players.age }}</li>
            </ul>
        </div>

        <div>
            <h1>Conditional Rendering</h1>
            <p>{{ goat }}</p>
            <button @click="changeGoat">Change</button>
            <p v-if="goat === 'chris'">You are smart</p>
            <ul>
                <li v-for="(value, key, index) in myObject" :key="key">
                    {{ index }} > {{ key }}: {{ value }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "myLoops",

    data() {
        return {
            myArray: [
                { id: 0, name: "Messi", age: 34 },
                { id: 1, name: "Christiano", age: 37 },
                { id: 2, name: "Di-Maria", age: 30 },
                { id: 3, name: "ozil", age: 28 },
                { id: 4, name: "Tevez", age: 27 },
                { id: 5, name: "Ronaldo", age: 33 },
            ],
            goat: "messi",
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
        }
    },

    methods: {
        changeGoat() {
            this.goat = "chris"
        }
    }
}
</script>

<style>
ul li {
    list-style: none;
}
</style>