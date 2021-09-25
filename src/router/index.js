import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import store from './../store'


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
    path: '/publicMessage',
    name: 'publicMessage',
    component: () => import('../views/publicMessage.vue')
  },
  {
    path: '/user/:id/follower',
    name: 'follower',
    component: () => import('../views/UserFollower.vue')
  }, {
    path: '/user/:id/following',
    name: 'following',
    component: () => import('../views/UserFollowing.vue')
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
    path: 'testing',
    name: 'testingChat',
    component: () => import('../views/TestingChat.vue'),
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

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
  // console.log('isAuthenticated', isAuthenticated)
  const pathsWithoutAuthentication = ['Regist', 'Login', 'AdminLogin']
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/login')
    return
  }
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/main')
    return
  }
  next()
})

export default router
