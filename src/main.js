import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Filters
Vue.filter('uppercase', str => str.toUpperCase())

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
