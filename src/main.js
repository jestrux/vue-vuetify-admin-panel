import Vue from 'vue';
import router from './router';
import store from './store';

import Loader from './UI/components/Loader';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.component('Loader', Loader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
