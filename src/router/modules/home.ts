import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: 'Home',
    },
  },
]

export default routes
