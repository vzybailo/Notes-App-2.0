import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import Vuelidate from 'vuelidate'

//plugins
Vue.use(Vuelidate)


Vue.config.productionTip = false

new Vue({
  router: routes,
  render: h => h(App),
}).$mount('#app')