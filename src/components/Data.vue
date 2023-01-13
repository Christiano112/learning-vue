<template>
    <div>
        <h1>Chris Data on Vue</h1>
        <h1>{{secondTime}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'MyData',

        props: {
            secondTime: String,
        },

        data() {
            return {
                message: 'Hello Vue!'
            }
        },

        methods: {
            myMethod() {
                console.log('My Method');
            }
        }
    }
</script>