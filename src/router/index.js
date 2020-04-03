import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  /* {
    path: '/data-management',
    component: Layout,
    redirect: '/data-management',
    name: 'today',
    meta: {
      title: '数据管理',
      icon: 'nested'
    },
    children: [
      { path: 'today', component: () => import('@/views/data-management/today'), name: 'exportExcel', meta: { title: '数据今日管理' }},
      { path: 'history', component: () => import('@/views/data-management/history'), name: 'uploadExcel', meta: { title: '数据历史管理' }},
      { path: 'feedback', component: () => import('@/views/data-management/feedback'), name: 'exportExcel', meta: { title: '数据检查反馈' }},
      { path: 'all', component: () => import('@/views/data-management/all'), name: 'all', meta: { title: '数据全部管理' }}
    ]
  }, */
  {
    path: '/data-management',
    component: Layout,
    redirect: '/data-management',
    name: 'today',
    meta: {
      title: '数据管理',
      icon: 'nested'
    },
    children: [
      { path: 'today', component: () => import('@/views/data-management/today'), name: 'exportExcel', meta: { title: '数据今日管理' }},
      { path: 'history', component: () => import('@/views/data-management/history'), name: 'uploadExcel', meta: { title: '数据历史管理' }},
      { path: 'fankui', component: () => import('@/views/data-management/feedback'), name: 'exportExcel', meta: { title: '数据检查反馈' }},
      { path: 'all', component: () => import('@/views/data-management/all'), name: 'all', meta: { title: '数据全部管理' }}
    ]
  },
  {
    path: '/7s-inspect',
    component: Layout,
    redirect: '/7s-inspect',
    name: 'today',
    meta: {
      title: '7S检查',
      icon: 'skill'
    },
    children: [
      { path: 'today', component: () => import('@/views/7s-inspect/today'), name: 'exportExcel', meta: { title: '7S今日检查' }},
      { path: 'history', component: () => import('@/views/7s-inspect/history'), name: 'uploadExcel', meta: { title: '7S历史检查' }},
      { path: 'feedback', component: () => import('@/views/7s-inspect/feedback'), name: 'exportExcel', meta: { title: '7S检查反馈' }},
      { path: 'all', component: () => import('@/views/7s-inspect/all'), name: 'all', meta: { title: '7S全部检查' }}
    ]
  },
  {
    path: '/dormitory-inspection',
    component: Layout,
    redirect: '/dormitory-inspection',
    name: 'today',
    meta: {
      title: '寝室检查',
      icon: 'peoples'
    },
    children: [
      { path: 'today', component: () => import('@/views/dormitory-inspection/today'), name: 'exportExcel', meta: { title: '寝室今日检查' }},
      { path: 'history', component: () => import('@/views/dormitory-inspection/history'), name: 'uploadExcel', meta: { title: '寝室历史检查' }},
      { path: 'feedback', component: () => import('@/views/dormitory-inspection/feedback'), name: 'exportExcel', meta: { title: '寝室检查反馈' }},
      { path: 'all', component: () => import('@/views/dormitory-inspection/all'), name: 'all', meta: { title: '寝室全部检查' }}
    ]
  },
  {
    path: '/teaching-inspection',
    component: Layout,
    redirect: '/teaching-inspection',
    name: 'today',
    meta: {
      title: '教学检查',
      icon: 'education'
    },
    children: [
      { path: 'today', component: () => import('@/views/teaching-inspection/today'), name: 'exportExcel', meta: { title: '教学今日检查' }},
      { path: 'history', component: () => import('@/views/teaching-inspection/history'), name: 'uploadExcel', meta: { title: '教学历史检查' }},
      { path: 'feedback', component: () => import('@/views/teaching-inspection/feedback'), name: 'exportExcel', meta: { title: '教学检查反馈' }},
      { path: 'all', component: () => import('@/views/teaching-inspection/all'), name: 'all', meta: { title: '教学全部检查' }}
    ]
  },
  {
    path: '/self-study',
    component: Layout,
    redirect: '/self-study',
    name: 'today',
    meta: {
      title: '自习检查',
      icon: 'edit'
    },
    children: [
      { path: 'today', component: () => import('@/views/self-study/today'), name: 'exportExcel', meta: { title: '自习今日检查' }},
      { path: 'history', component: () => import('@/views/self-study/history'), name: 'uploadExcel', meta: { title: '自习历史检查' }},
      { path: 'feedback', component: () => import('@/views/self-study/feedback'), name: 'exportExcel', meta: { title: '自习检查反馈' }},
      { path: 'all', component: () => import('@/views/self-study/all'), name: 'all', meta: { title: '自习全部检查' }}
    ]
  },
  {
    path: '/file-management',
    component: Layout,
    redirect: '/file-management',
    meta: {
      title: '档案管理',
      icon: 'excel'
    },
    children: [
      { path: 'file', component: () => import('@/views/file-management/file'), name: 'exportExcel', meta: { title: '学期档案' }},
      { path: 'file2', component: () => import('@/views/file-management/file2'), name: 'uploadExcel', meta: { title: '学期档案2' }},
      { path: 'file3', component: () => import('@/views/file-management/file3'), name: 'exportExcel', meta: { title: '学期档案3' }},
      { path: 'file4', component: () => import('@/views/file-management/file4'), name: 'all', meta: { title: '学期档案4' }}
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
