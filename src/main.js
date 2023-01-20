import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

import App from './App.vue'
// import MyComponents from './components/Components.vue';
// import myRandom from './components/Random.vue';
// import CounterApp from './components/view/Counter.vue';
// import myFetch from './components/view/Fetch.vue';
// import myTodo from './components/view/Todo.vue';

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {
//             path: "/",
//             name: "MyComponents",
//             component: MyComponents
//         },
//         {
//             path: "/Counter.vue",
//             name: "CounterApp",
//             component: CounterApp
//         },
//         {
//             path: "/Fetch.vue",
//             name: "myFetch",
//             component: myFetch
//         },
//         {
//             path: "/Todo.vue",
//             name: "myTodo",
//             component: myTodo
//         },
//         {
//             path: "/Random.vue",
//             name: "myRandom",
//             component: myRandom
//         },
//     ]
// })

const store = createStore({
    state() {
        return {
            myCount: 5
        }
    },
    getters: {
        doubleCount(state) {
            return state.myCount * 2
        }
    },
    mutations: {
        myAdd(state, num) {
            state.myCount += num
        }
    },
    actions: {
        asyncAdd({ commit }, val) {
            setTimeout(() => {
                commit('myAdd', val)
            }, 2000)
        }
    },

})

createApp(App).use(store).mount('#app')
