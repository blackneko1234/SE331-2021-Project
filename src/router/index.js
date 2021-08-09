import { createRouter, createWebHistory } from 'vue-router'
import PeopleList from '../views/PeopleList.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PeopleList
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
