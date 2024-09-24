import 'nprogress/nprogress.css'

import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

import routes from './routes'

// 修改进度条插件的配置
NProgress.configure({
  showSpinner: false
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // @ts-ignore
  to.meta.title && (document.title = to.meta.title)
  NProgress.start()

  next()
})

router.afterEach((to) => {
  NProgress.done()
})

export default router
