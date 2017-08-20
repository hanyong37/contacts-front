import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import New from '@/components/New'
import Edit from '@/components/Edit'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.root = '/root'

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/new',
      component: New
    },
    {
      path: '/',
      component: Home
    }
  ]
})
