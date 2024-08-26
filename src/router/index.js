import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventListView,
      // Props as a function -> find query param page and set it to route param page, if not, default to 1
      props: (route) => {
        return { page: parseInt(route.query.page) } || 1
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      props: true,
      name: 'event-details',
      component: EventDetailsView
    }
  ]
})

export default router
