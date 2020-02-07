<template>
    <div id="notification">
        <div :style="`background-color: ${color}`">
            {{ message || '' }} <button @click="cancel">X</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['message', 'status'],
        name: "Notification",
        data() {
            return {
                colors: {
                    'error': 'red',
                    'warning': 'yellow',
                    'success': 'green',
                    'default': 'grey',
                }
            }
        },
        methods: {
            cancel() {
                this.$emit('cancel')
            }
        },
        computed: {
            color() {
                /* eslint-disable no-console */
                console.log(this.status);
                /* eslint-enable no-console */
                return this.colors[this.status] || this.colors['default']
            }
        }
    }
</script>

<style scoped>

</style>