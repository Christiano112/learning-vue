<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: "mySlot",

    data() {
        return {
            slo: "This is me practising slots"
        }
    },
}

</script>