import Vue from 'vue'
import Router from 'vue-router'

import Contacts from '@/components/Contacts'
import New from '@/components/New'
import Edit from '@/components/Edit'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contacts',
      component: Contacts
    },
    {
      path: '/contact/:id/edit',
      component: Edit
    },
    {
      path: '/contact/:id',
      name: 'viewContact',
      component: View
    },
    {
      path: '/new',
      component: New
    },
    {
      path: '/',
      component: Contacts
    }
  ]
})
