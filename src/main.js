import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dogBreeds from './dog-breeds'
Vue.config.productionTip = false

let data = {
  dogBreeds: dogBreeds,
  favorites: []
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
