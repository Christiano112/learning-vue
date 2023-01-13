<template>
    <div>
        <h1>My Todos</h1>

        <div>
            <h3>Things I want to learn</h3>
            <ul v-for="item in todos" :key="item.id">
                <li>
                    <span>{{ item.title }}</span>
                    <button :class="{ btn: item.completed }" @click="item.completed = !item.completed">{{
                        item.completed
                    }}</button>
                    <button class="delete" @click="deleteTodo(item)">DELETE</button>
                </li>
            </ul>
            <h3>Add New Todo</h3>
            <form @submit.prevent="addTodos">
                <input type="text" v-model="newTitle" placeholder="enter Todo name" required>
                <input type="checkbox" name="complete" id="complete">
                <button type="submit">Add Todo</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "myTodo",

    data() {
        return {
            todos: [
                { id: 0, title: "Learn Vue", completed: true },
                { id: 1, title: "Learn React", completed: true },
                { id: 2, title: "Learn Angular", completed: false },
                { id: 3, title: "Learn Svelte", completed: false },
                { id: 4, title: "Learn Node", completed: false },
                { id: 5, title: "Learn Express", completed: false },
            ],
            newTitle: "",
        }
    },

    methods: {
        deleteTodo(item) {
            this.todos = this.todos.filter((a) => a !== item);
        },

        addTodos() {
            this.todos.push({
                id: this.todos.length + 1,
                title: this.newTitle,
                completed: false
            }),
                this.newTitle = ""
        }
    },
}
</script>

<style scoped>
ul li,
form {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 1rem auto;
    width: 50%;
}

span {
    margin: 0 1rem;
    text-align: center;
}

button {
    text-transform: capitalize;
}

.btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: rgb(21, 104, 86);
    color: #361010;
    cursor: pointer;
}

.delete {
    background-color: rgb(45, 48, 84);
    color: #ff0000;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
}

form input {
    padding: 0.5rem 1rem;
    border-radius: 5px;
}
</style>


<!-- TODO -->
<!-- 1. ADD LOCAL STORAGE -->
<!-- 2. ADD EDIT BUTTON -->
<!-- 3. SESSION STORAGE -->
<!-- 4. ADD FIREBASE -->
<!-- 5. ADD ALERTS (APIS AND ALL) -->