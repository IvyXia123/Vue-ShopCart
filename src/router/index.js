import Vue from 'vue'
import Router from 'vue-router'
import shopCart from '@/components/shopCart'
import AddressCom from '@/components/AddressCom'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name: 'shopcart',
      component: shopCart
    },
    {
      path:'/address',
      name:'orderAddress',
      component:AddressCom
    }
  ]
})
