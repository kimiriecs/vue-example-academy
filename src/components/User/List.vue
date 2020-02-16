<template>
    <div id="users-list">
        <h1>User Lists</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link tag="a" :to="`/users/${user.id}`">{{ user.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                users: []
            }
        },
        methods: {
            getUsers() {
                this.$http.get('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())
                    .then(users => this.users = users)
                    .catch(e => console.log(e))
            }
        },
        created() {
            this.getUsers()
        }
    }
</script>

<style scoped>

</style>