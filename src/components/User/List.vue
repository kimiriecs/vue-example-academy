<template>
    <div id="users-list">
        <h1>User Lists</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link tag="a" :to="`/users/${user.id}`"><span :class="{'bg-orange-500': user.id > 10}">{{ user.name }}</span></router-link>
            </li>
        </ul>

        <h2 class="bg-green-400">Create new User</h2>
        <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input v-model="name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="name" type="text">
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button @click="storeUser" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button">
                        Create
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                users: [],
                name: ''
            }
        },
        methods: {
            getUsers() {
                this.$http.get('https://jsonplaceholder.typicode.com/users', )
                    .then(res => res.json())
                    .then(users => this.users = users)
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            },
            storeUser() {
                let user = {name: this.name}

                this.$http.post('https://jsonplaceholder.typicode.com/users', user)
                    .then(res => res.json())
                    .then(user => {
                        this.users.push(user)
                        this.name = ''
                    })
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            }
        },
        created() {
            this.getUsers()
        }
    }
</script>

<style scoped>

</style>