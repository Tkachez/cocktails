import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home/Home')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/components/Profile/Profile')
  },
  {
    path: '/about',
    name: 'About us',
    component: () => import('@/components/About/About')
  }
]

const router = new VueRouter({
  routes
})

export default router
