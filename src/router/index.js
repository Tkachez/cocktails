import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Home/Home')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/components/Profile/Profile')
  },
  {
    path: '/ingredients',
    name: 'allIngredients',
    component: () => import('@/components/Ingredient/Ingredient')
  },
  {
    path: '/ingredients/:name',
    name: 'ingredient',
    component: () => import('@/components/Ingredient/Ingredient')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/About/About')
  }
]

const router = new VueRouter({
  routes
})

export default router
