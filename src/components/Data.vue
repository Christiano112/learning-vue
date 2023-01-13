<template>
    <div>
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