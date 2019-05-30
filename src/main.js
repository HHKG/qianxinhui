// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Tab from './components/Tab'
import 'lib-flexible/flexible'
import {routes} from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to,from,savedPosition){
		return{x:0,y:100}
	}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
