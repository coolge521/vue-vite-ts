import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/statistics-page.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue')
    },
    {
      path: '/user/:userName',
      name: 'user',
      component: () => import('../views/user.vue'),
      children: [
        { path: 'childOne', name: 'childOne', component: () => import('../views/userChildOne.vue') },
        { path: 'childTwo', name: 'childTwo', component: () => import('../views/userChildTwo.vue') }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/notFound.vue')
    }
  ]
});
router.beforeEach((to, from, next) => {
  //   NProgress.configure({
  //     easing: 'ease',  // 动画方式，和css动画属性一样（默认：ease）
  //     speed: 500,  // 递增进度条的速度，单位ms（默认： 200）
  //     showSpinner: false,  // 是否显示加载ico
  //     trickle: true,  //是否自动递增
  //     trickleSpeed: 200,  // 自动递增间隔
  //     minimum: 0.3,   // 初始化时的最小百分比，0-1（默认：0.08）
  //     parent: 'body',  //指定此选项以更改父容器（默认：body）
  //  })
  NProgress.start(); //每次切换页面时，调用进度条
  next(); //没有 next() 页面不会跳转
});

router.afterEach(() => {
  NProgress.done(); // 在即将进入新的页面组件前，关闭掉进度条
});
export default router;
