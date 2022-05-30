// base import
import Vue from 'vue'
import VueRouter from 'vue-router'
// Page Components
import IdentityAuthentication from '@/pages/identity-authentication'
import PhoneCertification from '@/pages/phone-certification'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/identity-authentication'
  },
  {
    name: 'IdentityAuthentication',
    path: '/identity-authentication',
    component: IdentityAuthentication
  },
  {
    name: 'PhoneCertification',
    path: '/phone-certification',
    component: PhoneCertification
  },
  {
    path: '*',
    redirect: '/'
  }, // fallback route
]

export default new VueRouter({
  mode: 'history',
  routes,
})
