<template>
    <div id="app">
        <!--notification-->
        <notification :message="notify.message" :status="notify.status" v-if="showNotify"
                      @cancel="showNotify = false"></notification>

        <router-link exact active-class="font-bold" to="/">Home</router-link>
        <router-link active-class="font-bold" to="/users">Users</router-link>

        <router-view></router-view> <!--Отображение выбранного компонента-->
    </div>
</template>

<script>
    import Notification from './components/Support/Notification'
    import Notifier from './mixins/notifier'

    export default {
        name: 'app',
        mixins: [Notifier],
        components: {
            Notification
        },
        data() {
            return {

            }
        },
        methods: {}
    }
</script>

<style src="./assets/css/tailwind.css"></style>
