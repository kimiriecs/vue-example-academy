import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Colored from './directives/colored'

Vue.config.productionTip = false

// Vue Router
Vue.use(VueRouter)


// Filters
Vue.filter('uppercase', str => str.toUpperCase())

// Directives
Vue.directive('colored', Colored)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
