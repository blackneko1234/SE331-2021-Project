import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'nprogress/nprogress.css'

const Vaccination = reactive({ DoctorNotify: '' })
createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .provide('Vaccination', Vaccination)
  .mount('#app')
