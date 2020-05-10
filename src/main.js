import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTypedJs from 'vue-typed-js'
import VueCarousel from 'vue-carousel';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(VueCarousel);
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
