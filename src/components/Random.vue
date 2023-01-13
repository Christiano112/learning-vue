<template>
    <div>
        <myConditionals :tellThem="tell" />
        <ExtraPlay />
        <myLoops />
        <MyComponents />
    </div>
</template>

<script>
import myConditionals from './Conditionals.vue';
import ExtraPlay from './Extra.vue';
import myLoops from "./Loop.vue";
import MyComponents from './Components.vue';

export default {
    name: "myRandom",
    components: {
        myConditionals,
        ExtraPlay,
        myLoops,
        MyComponents,
    },
    data() {
        return {
            tell: "This props stuff is working",
            myAge: 10,
        }
    },
}
</script>