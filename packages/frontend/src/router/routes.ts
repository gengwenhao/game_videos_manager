import layoutRoute from '@/views/layout/route'

const routes: any[] = [
  layoutRoute,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'Login | Game Videos Manager'
    }
  },
  {
    path: '',
    name: 'error404',
    component: () => import('@/views/error404/index.vue'),
    meta: {
      title: 'Error404 Page Not Found | Game Videos Manager'
    }
  }
]

export default routes
