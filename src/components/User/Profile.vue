<template>
    <div id="user-profile"> <!--Обязательный корневой элемент-->
        <h1>User Profile</h1>
        <p><strong>Name</strong> {{ user.name }}</p>
        <p><strong>Surname</strong> {{ user.surname }}</p>
    </div>
</template>

<script>
    export default {
        props: ['user'],
        name: "Profile",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>