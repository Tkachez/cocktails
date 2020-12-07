import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "@/vuex";
import 'bootstrap/dist/css/bootstrap.min.css';
import VueI18n  from 'vue-i18n';
import infiniteScroll from 'vue-infinite-scroll'
import en from './i18n/en.json';
import ru from './i18n/ru.json';
import router from './router'

Vue.config.productionTip = false
Vue.use(infiniteScroll)
Vue.use(VueI18n)

const i18n = new VueI18n({
  messages: {
    en,
    ru
  },
  locale: 'en',
  fallbackLocale: 'en',
})

new Vue({
  vuetify,
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
