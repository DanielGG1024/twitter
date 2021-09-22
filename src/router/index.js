import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: { name: 'Login' }
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
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/main/reply/:id',
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
    path: '/user/:id',
    name: 'user',
    redirect: '/user/:id/tweetList',
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
    path: '/user/:id/follower',
    name: 'follower',
    component: () => import('../views/UserFollower.vue')
  },
  {
    path: '/user/:id/following',
    name: 'following',
    component: () => import('../views/UserFollowing.vue')
  },
  {
    path: '*',
    name: 'Not-found',
    component: () => import('../views/NotFound.vue'),
  },
  

]

const router = new VueRouter({
  // linkExactActiveClass:'active',
  linkActiveClass: 'active',
  routes
})

export default router
