import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import FirstPage from '../pages/FirstPage.vue'
import SecondPage from '../pages/SecondPage.vue'
import ThirdPage from '../pages/ThirdPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/one',
      name: 'one',
      component: FirstPage
    },
    {
      path: '/two',
      name: 'two',
      component: SecondPage
    },
    {
      path: '/three',
      name: 'three',
      component: ThirdPage
    },
  ]
})

export default router
