<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="/Todo.vue">
                    Todo
                </router-link>
            </li>
            <li>
                <router-link to="/Counter.vue">
                    Counter App
                </router-link>
            </li>
            <li>
                <router-link to="/Fetch.vue">
                    Fetch
                </router-link>
            </li>
            <li>
                <router-link to="/Random.vue">
                    Random
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: "myHeader",

    data() {
        return {
            name: "navBar"
        }
    }
}
</script>


<style  scoped>
nav {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    margin-bottom: 3rem;
}

nav ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}

nav ul li {
    list-style: none;
}
</style>