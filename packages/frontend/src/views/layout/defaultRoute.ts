import _ from 'lodash'

import Layout from './index.vue'

const defaultRoute = {
  path: '',
  name: 'layout',
  component: Layout,
  children: []
}

/**
 * 根据 .vue 模块所在路径，将其注册进路由中
 * @param route
 * @param path
 * @param component
 */
const appendToRoute = (route: any, path: string, component: any) => {
  if (!path.endsWith('index.vue')) {
    throw new Error('file path not ends width index.vue')
  }

  path = path.replace(/\/index.vue$/, '')

  const childNames = path
    .split('children')
    .filter(o => o)
    .map(o => o.replace(/^\/+|\/+$/g, ''))

  for (const childName of childNames) {
    // @ts-ignore
    let child = route.children.find(ch => ch.name === childName)
    if (!child) {
      child = {
        name: childName,
        path: childName,
        children: []
      }
      route.children.push(child)
    }

    route = child
  }


  route.component = component
}

/**
 * 根据 .vue 模块所在路径，将其注册进路由中
 * @param route
 * @param path
 * @param config
 */
const mergeToRoute = (route: any, path: string, config: any) => {
  if (!path.endsWith('route.ts')) {
    throw new Error('file path not ends width route.ts')
  }

  path = path.replace(/\/route.ts$/, '')

  const childNames = path
    .split('children')
    .filter(o => o)
    .map(o => o.replace(/^\/+|\/+$/g, ''))

  for (const childName of childNames) {
    // @ts-ignore
    let child = route.children.find(ch => ch.name === childName)
    if (!child) {
      child = {
        name: childName,
        path: childName,
        children: []
      }
      route.children.push(child)
    }

    route = child
  }

  // 合并配置
  _.merge(route, config)
}

// 导入所有 children/**/index.vue 模块
const modules: Record<string, any> = import.meta.glob('./children/**/index.vue', {
  eager: true
})

// 导入所有 **/route.ts 模块
const routes: Record<string, any> = import.meta.glob('./children/**/route.ts', {
  eager: true
})

const route = _.cloneDeep(defaultRoute)

// 构造 route 对象
Object
  .entries(modules)
  .forEach(([fullPath, module]) => {
    const relativePath = fullPath.slice(2)
    appendToRoute(route, relativePath, module.default)
  })

// 合并 route 对象
Object
  .entries(routes)
  .forEach(([fullPath, module]) => {
    const relativePath = fullPath.slice(2)
    mergeToRoute(route, relativePath, module.default)
  })


export default route
