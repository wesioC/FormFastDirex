import { createApp } from 'vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './style.css'
import App from './App.vue'
import router from './routes'

// Importando o Maska
import { vMaska } from "maska/vue"

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

// Usando diretivas do Maska
app.directive('maska', vMaska)

app.use(mdiVue, {
  icons: mdijs
})

app.mount('#app')
