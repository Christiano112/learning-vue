<template>
    <div>
        <myConditionals :tellThem="tell" />
        <ExtraPlay />
        <myLoops />
    </div>
</template>

<script>
import myConditionals from './Conditionals.vue';
import ExtraPlay from './Extra.vue';
import myLoops from "./Loop.vue";

export default {
    name: "myRandom",
    components: {
        myConditionals,
        ExtraPlay,
        myLoops,
    },
    data() {
        return {
            tell: "This props stuff is working",
            myAge: 10,
        }
    },
}
</script>