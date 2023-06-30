// HTML
import './index.html';
// CSS
import './styles.scss';

import Vue from 'vue'
import App from './App.vue'

import routes from './routes'
import store from  './store'
import Vuelidate from 'vuelidate'
import VueCarousel from 'vue-carousel'

//plugins
Vue.use(Vuelidate)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  store,
  router: routes,
  render: h => h(App),
}).$mount('#app')