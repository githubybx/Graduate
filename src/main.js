import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
