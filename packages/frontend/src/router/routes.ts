import layoutRoute from '@/views/layout/defaultRoute'

const routes: any[] = [
  layoutRoute,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '',
    name: 'error404',
    component: () => import('@/views/error404/index.vue')
  }
]

export default routes