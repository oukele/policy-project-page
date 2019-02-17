import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import router from './router'

import axios from 'axios'

import loginPage from './views/login.vue'

Vue.use(loginPage)
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.withCredentials = true //允许请求携带cookie

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
