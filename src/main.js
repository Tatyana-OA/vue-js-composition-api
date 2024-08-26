import { createApp, reactive } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//create a global store
const store = reactive({ flashMessage: '' })

app.use(router)

// provide the global store to app
app.provide('store', store)
app.mount('#app')
