import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false
Vue.use(VueMoment)


new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
