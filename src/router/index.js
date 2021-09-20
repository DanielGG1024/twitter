import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'main' }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/main/reply',
    name: 'Reply',
    component: () => import('../views/Reply.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/adminMain',
    name: 'AdminMain',
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/adminUser',
    name: 'AdminUser',
    component: () => import('../views/AdminUser.vue')
  },
  {
    path: '/user/self',
    name: 'userSelf',
    redirect: '/user/self/tweetList',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: 'tweetList',
        name: 'tweetList',
        component: () => import('../components/UserTweetList.vue')

      },
      {
        path: 'replies',
        name: 'replies',
        component: () => import('../components/UserSelfReply.vue')
      },
      {
        path: 'likes',
        name: 'likes',
        component: () => import('../components/UserSelfLike.vue')
      }
    ]
  },
  {
    path: '/user/self/follower',
    name: 'follower',
    component: () => import('../views/UserFollower.vue')
  },
  {
    path: '/user/self/following',
    name: 'following',
    component: () => import('../views/UserFollowing.vue')
  },
  

]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
