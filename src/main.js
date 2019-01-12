// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import store from './store/Store'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.config.productionTip = false

console.log('---' ,localStorage.getItem('token'))
Vue.http.interceptors.push((request, next) => {
  request.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
  request.headers['Accept'] = 'application/json'
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
