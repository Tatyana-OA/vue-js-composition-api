import { createApp, reactive } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//create a global store
const store = reactive({ flashMessage: '' })

app.use(router)
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  if (to.meta.requireAuth) {
    store.flashMessage = 'You are not authorized to access this route'
    setTimeout(() => {
      store.flashMessage = ''
    }, 3000)
    return {
      path: '/'
    }
  }
})

// provide the global store to app
app.provide('store', store)
app.mount('#app')
