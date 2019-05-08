import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import Swal from 'vue-sweetalert2'

Vue.use(Swal)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
