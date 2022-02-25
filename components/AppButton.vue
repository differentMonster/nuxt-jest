<template>
    <div>
        <router-link :to="to"></router-link>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                required: true,
                type: String
            },
            to: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style>

</style>