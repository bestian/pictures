import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
Vue.use(VueViewer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
