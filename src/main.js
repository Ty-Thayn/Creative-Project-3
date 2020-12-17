import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dogBreeds from './dog-breeds'
Vue.config.productionTip = false

let data = {
  allDogBreeds: dogBreeds,
  favorites: []
}

//console.log(data);
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')


