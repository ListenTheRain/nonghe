// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Resource from 'vue-resource'
import '../static/bootstrap/js/bootstrap.js'
import '../static/bootstrap/css/bootstrap.css'
import index from './util/js/index'
Vue.config.productionTip = false
Vue.use(Resource)

Vue.prototype.index = index
Vue.use(index)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
