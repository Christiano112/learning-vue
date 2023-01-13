<template>
    <h1>Fetch API APPLICATION</h1>
    <div v-for="(value, key) in users" :key="key">
        <h6>{{value.name}} || {{ value.email }}</h6>
    </div>
</template>

<script>

export default {
    name: "myFetch",

    data() {
        return {
            users: "",
            data: "",
        }
    },

    mounted() {
        try {
            fetch('https://jsonplaceholder.typicode.com/users', {
                headers: {
                    Accept: "application/json",
                },
            })
                .then(response => response.json())
                .then((data) => {
                    this.users = data;
                    console.log(this.users)
                })
        }
        catch (error) {
            console.log(error)
        }
    }
}

</script>