<template>
    <div>
        <h1>{{ secondTime }}</h1>
        <VuexStore />
    </div>
</template>

<script>
import VuexStore from './VuexStore.vue';

export default {
    name: 'MyData',

    components: {
        VuexStore,
    },

    props: {
        secondTime: String,
    },
}
</script>