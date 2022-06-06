import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import './assets/index.css'

const Vue = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add( faBars, faCopyright ) 

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(router)

Vue.mount('#app')
