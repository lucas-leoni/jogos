import Vue from 'vue';
import AppLoading from '@/components/AppLoading.vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.component('AppLoading', AppLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
