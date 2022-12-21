<template>
    <div>
        <h1>Welcome to conditionals</h1>
        <p v-if="age >  18">He is Legal</p>
        <p v-else-if="age == 18 && name == 'Ade'">Allow him because of his name</p>
        <p v-else>Chase Them Away</p>
        <p>{{ tellThem }}</p>
    </div>
</template>

<script>
export default {
    name: "myConditionals",

    props: {
        tellThem: String,
    },

    data() {
        return {
            age: 9,
            name: "Ade",
        }
    }
}
</script>