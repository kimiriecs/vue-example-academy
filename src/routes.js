import VueRouter from 'vue-router'

import Home from './components/Home'
import UserList from './components/User/List'

export default new VueRouter({
    routes: [
        {
            path: '', // http://localhost:8080/
            component: Home
        },
        {
            path: '/users', // http://localhost:8080/users
            component: UserList
        }
    ],
    mode: 'history' // http://localhost:8080/#/users => http://localhost:8080/users
})