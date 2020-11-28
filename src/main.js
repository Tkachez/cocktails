import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "@/vuex";
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
