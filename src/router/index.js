import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
// import Hello from '@/components/Hello'

import VueResource from 'vue-resource'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Header,
        footer: Footer,
        menu: Menu
      }
    }
  ]
})
