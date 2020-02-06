<template>
    <div id="user-profile"> <!--Обязательный корневой элемент-->
        <h1>User Profile</h1>
        <p><strong>Name</strong> {{ user.name }}</p>
        <p><strong>Surname</strong> {{ user.surname }}</p>

        <div v-if="!showForm">
            <button @click="showForm = !showForm">Edit</button>
        </div>
        <div v-else>
            <profile-form :user="user" @save-user="saveUser($event)" @cancel="showForm = false"></profile-form>
        </div>
    </div>
</template>

<script>
    import ProfileForm from "./ProfileForm";

    export default {
        components: {ProfileForm},
        props: {
            user: {
                type: Object,
                required: true//,
                // default: 'Default string'
            }
        },
        name: "Profile",
        data() {
            return {
                showForm: false
            }
        },
        methods: {
            saveUser(user) {
                this.$emit('save-user', user)
            }
        }
    }
</script>

<style scoped>

</style>