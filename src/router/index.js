import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume_skills',
    name: 'resume_skills',
    component : ()=> import('@/views/resume_skills.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component : ()=> import('@/views/projects.vue')
  },
  {
    path: '/Testimonial',
    name: 'Testimonial',
    component : ()=> import('@/views/testimonial.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component : ()=> import('@/views/contact.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
