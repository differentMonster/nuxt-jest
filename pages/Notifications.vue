<template>
    <div>
        <h1>Notification</h1>
        <AppNotifications></AppNotifications>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    import AppNotifications from '@/components/AppNotifications.vue'
    export default {
        components: {
            AppNotifications
        },
        methods: {
            // ...mapActions({
            //     'getNotifications': 'getNotifications'
            // })
        },
        mounted() {
            // this.getNotifications()
        }
    }
</script>

<style>

</style>