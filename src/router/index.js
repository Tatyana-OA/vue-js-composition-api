import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetails from '../views/event/Details.vue'
import EventEdit from '../views/event/Edit.vue'
import EventRegister from '../views/event/Register.vue'
import EventLayout from '../views/event/Layout.vue'
import NotFound from '../views/NotFound.vue'
import NetworkErr from '../views/NetworkErr.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      // Props as a function -> find query param page and set it to route param page, if not, default to 1
      props: (route) => {
        return { page: parseInt(route.query.page) || 1 }
      }
    },
    // Lazy load "About"
    {
      path: '/about-us',
      name: 'about',
      alias: '/about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/events/:id',
      props: true,
      name: 'EventLayout',

      component: EventLayout,
      // /event/:id will be inherited by all children
      children: [
        {
          // Empty path means load at the root path of the layout
          path: '',
          name: 'EventDetails',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    // Redirecting all /event/:id to /eventS/:id
    {
      path: '/event/:id',
      redirect: () => {
        return {
          name: 'EventDetails'
        }
      },
      // Redirecting the nested routes
      children: [
        {
          path: 'register',
          redirect: () => ({ name: 'EventRegister' })
        },
        { path: 'edit', redirect: () => ({ name: 'EventEdit' }) }
      ]
      // Will serve for route guarding
    },
    // No resource found
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    // Network error
    {
      path: '/network-error',
      name: 'NetworkErr',
      component: NetworkErr
    },
    // Accessing a page that doesn't exist
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  // Scroll to top by default
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
