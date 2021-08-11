import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import PeopleList from '../views/PeopleList.vue'
import AboutUs from '../views/AboutUs.vue'
import Layout from '../views/PeoplePage/Layout.vue'
import PeopleDetail from '../views/PeoplePage/PeopleDetail.vue'
import VaccineDetail from '../views/PeoplePage/VaccineDetail.vue'
import PeopleService from '../services/PeopleService.js'
import Vaccination from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PeopleList,
    props: (route) => ({ page: parseInt(route.query.page) || 1, perPage: parseInt(route.query.perPage) || 4 })
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs

  },
  {
    path: '/people/:id',
    name: 'Layout',
    props: true,
    component: Layout,
    beforeEnter: (to) => {
      return PeopleService.getPeople(to.params.id)
        .then((response) => {
          Vaccination.event = response.data.people
        })
      /* .catch((error) => {
        if (error.response && error.response.status == 404) {
          return {
            // <--- Return
            name: '404Resource',
            params: { resource: 'event' }
          }
        } else {
          return { name: 'NetworkError' } // <--- Return
        }
      }) */
    },
    children: [
      {
        path: '',
        name: 'PeopleDetail',
        component: PeopleDetail
      },
      {
        path: 'vaccine',
        name: 'VaccineDetail',
        props: true,
        component: VaccineDetail
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
