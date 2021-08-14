import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/ContentPosts.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  // {
  //   path: '/work',
  //   name: 'works',
  //   component: () => import('../views/Works.vue')
  // },
  {
    path: '/culture',
    name: 'Culture',
    component: () => import('../views/Culture.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
