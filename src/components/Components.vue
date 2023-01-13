<template>
    <div>
        Parent Component
        <MyData secondTime="Chris is a prop master" />
        <mySlot>
            <h1>Chris Slot</h1>
            <h1>jgdsv</h1>
        </mySlot>
    </div>
</template>

<script>
    import MyData from './Data.vue';
    import mySlot from './Slot.vue';

    export default {
        name: 'MyComponents',

        components: {
            MyData,
            mySlot,
        },

        data() {
            return {
                message: 'Parent'
            }
        },
    }
</script>