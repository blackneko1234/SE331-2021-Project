import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import Vaccination from './store'
import 'nprogress/nprogress.css'

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .provide('Vaccination', Vaccination)
  .mount('#app')
