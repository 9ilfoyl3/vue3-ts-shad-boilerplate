import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
import homeRoutes from './modules/home'
// ... import other route modules

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      ...homeRoutes,
      // 可以在这里添加更多子路由
    ],
    redirect: '/home',
  },
  // ...homeRoutes,
  // ... spread other route modules
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
