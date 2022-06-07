import { createApp } from 'vue'
import App from './App.vue'
const Vue = createApp(App)

// Vue Router import
import router from './routes/router'
Vue.use(router)
// Tailwind CSS Imports
import './assets/index.css'
//PrimeVue imports
import PrimeVue from 'primevue/config'
import Calendar from 'primevue/calendar';
//FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// Plugin declarations

// FontAwesome
library.add( faBars, faCopyright )
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

// Prime vue
Vue.use(PrimeVue)
Vue.component('Calendar', Calendar)
//Plugins calls



Vue.mount('#app')
