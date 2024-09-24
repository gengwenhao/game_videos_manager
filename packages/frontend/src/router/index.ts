import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    },
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '*',
      name: 'error404',
      component: () => import('@/views/error404/index.vue')
    }
  ]
})

export default router
