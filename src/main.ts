import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from "vue-head";

Vue.config.productionTip = false

Vue.use(VueHead, {
  complement: "全体タイトル"
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
