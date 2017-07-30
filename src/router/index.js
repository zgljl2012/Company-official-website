import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Company from '@/components/Company'
import Product from '@/components/Product'
import ContractUS from '@/components/ContractUS'
import Stories from '@/components/Stories'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/company',
      name: 'Company',
      component: Company
    }, {
      path: '/product',
      name: 'Product',
      component: Product
    },
    , {
      path: '/stories',
      name: 'Stories',
      component: Stories
    }, {
      path: '/contract_uS',
      name: 'ContractUS',
      component: ContractUS
    }
  ]
})
