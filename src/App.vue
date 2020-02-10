<template>
    <div id="app">
        <div>Hello, {{ user.name | uppercase }}!</div>
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
    import UserProfile from './components/User/Profile'
    import Notification from './components/Support/Notification'
    import Notifier from './mixins/notifier'

    export default {
        name: 'app',
        mixins: [Notifier],
        components: {
            HelloWorld, UserProfile, Notification
        },
        data() {
            return {
                user: {
                    name: 'John',
                    surname: 'Doe',
                    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            }
        },
        methods: {

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
