<template>
    <div id="app">
        <!--notification-->
        <notification :message="notify.message" :status="notify.status" v-if="showNotify"
                      @cancel="showNotify = false"></notification>

        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <user-profile :user="user" @save-user="user = $event"></user-profile>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import UserProfile from "./components/User/Profile";
    import {eventBus} from "./main";
    import Notification from "./components/Support/Notification";

    export default {
        name: 'app',
        components: {
            HelloWorld, UserProfile, Notification
        },
        data() {
            return {
                user: {
                    name: 'John',
                    surname: 'Doe'
                },
                notify: {
                    message: null,
                    status: null
                },
                showNotify: false
            }
        },
        methods: {

        },
        created() {
            eventBus.$on('show-notify', (notify) => {
                this.notify = notify
                this.showNotify = true
            })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
