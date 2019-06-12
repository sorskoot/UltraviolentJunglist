import Vue from 'vue';
import App from './app/App.vue';
import {router} from './lib';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
