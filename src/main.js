import Vue from 'vue'
import App from './App.vue'
import Colored from './directives/colored'

Vue.config.productionTip = false

// Filters
Vue.filter('uppercase', str => str.toUpperCase())

// Directives
Vue.directive('colored', Colored)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
