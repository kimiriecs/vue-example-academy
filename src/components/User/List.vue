<template>
    <div id="users-list">
        <h1>User Lists</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link tag="a" :to="`/users/${user.id}`">
                    <span :class="{'bg-orange-500': user.id > 10}">{{ user.name }}</span>
                </router-link>

                <button @click="editUser(user)" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button">
                    Edit
                </button>
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
                    <input v-model="user.name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="name" type="text">
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button v-if="showCreate" @click="storeUser" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button">
                        Create
                    </button>
                    <button v-else @click="updateUser" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button">
                        Update
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
                user: {name: '', id: null},
                showCreate: true,
                resource: null
            }
        },
        methods: {
            getUsers() {
                this.resource.get({})
                    .then(res => res.json())
                    .then(users => this.users = users)
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            },
            storeUser() {
                let user = this.user

                this.resource.save({}, user)
                    .then(res => res.json())
                    .then(user => {
                        this.users.push(user)
                        this.user = {name: '', id: null}
                    })
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            },
            editUser(user) {
                this.user.name = user.name
                this.user.id = user.id
                this.showCreate = false
            },
            updateUser() {
                let user = this.user

                this.resource.update({id: user.id} , user)
                    .then(res => res.json())
                    .then(user => {
                        this.users[user.id - 1] = user
                        this.user = {name: '', id: null}
                        this.showCreate = true
                    })
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e)
                        /* eslint-enable no-console */
                    })
            }
        },
        created() {
            this.resource = this.$resource('users{/id}')

            this.getUsers()
        }
    }
</script>

<style scoped>

</style>