import Vue from 'vue'
import App from './App.vue'
import Profile from "./components/User/Profile";

Vue.config.productionTip = false

Vue.component('user-profile', Profile)

new Vue({
  render: h => h(App),
}).$mount('#app')
