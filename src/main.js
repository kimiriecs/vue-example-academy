import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import Colored from './directives/colored'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// Vue Router
Vue.use(VueRouter)

// Vue Resource
Vue.use(VueResource)


// Filters
Vue.filter('uppercase', str => str.toUpperCase())

// Directives
Vue.directive('colored', Colored)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
