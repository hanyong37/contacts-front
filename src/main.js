// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import App from './App'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(VueResource)

// Global Setting
// resusable components
Vue.component('back-to-list', {
  template: "<router-link class='btn btn-secondary' to='/contacts'>Back to List</router-link>"
})
// external api url, used by VueResource
Vue.prototype.contactUrl = () => { return 'http://localhost:8089/contacts{/id}' }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
