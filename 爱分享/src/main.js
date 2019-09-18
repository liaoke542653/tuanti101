import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import {store} from './store.js'
import axios from 'axios'
import VueRouter from 'vue-router'
import login from './components/login.vue'
import regist from './components/registered.vue'

Vue.prototype.axios = axios
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false

const routes = [
  { path: '/login', component: login },
  { path: '/regist', component: regist },

]
const router = new VueRouter({
  mode:'history',
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  store:store,
  router,
  render: h => h(App),
}).$mount('#app')
