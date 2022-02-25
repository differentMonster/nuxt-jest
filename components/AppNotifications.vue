<template>
    <div>
        <li v-for="notification in notifications" :key="notification.id">
            {{ notification.body }}
        </li>
    </div>
</template>
<script>
    const url = 'https://jsonplaceholder.typicode.com/users/1';

    export default {
        data() {
            return {
                notifications: []
            }
        },

        methods: {
            async takeNotifications() {
                await this.$axios.get('/notifications.json').then((response) => {
                    // this.notifications = response.data.data
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },

        mounted() {
            this.takeNotifications()
        }

    }
</script>

<style>

</style>