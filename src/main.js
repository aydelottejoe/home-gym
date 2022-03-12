import Vue from 'vue'
import App from './App.vue'
import router from './router'
import equipment from './equipment.js'

let data = {
  products: equipment,
  favorites: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
