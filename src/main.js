// base import
import Vue from 'vue'
import App from './App.vue'
// router
import router from '@/router'
//plugin
import validate from './plugins/validate'
import request from './plugins/request'

Vue.config.productionTip = false

Vue.use(validate);
Vue.use(request);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
