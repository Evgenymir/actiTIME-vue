import Vue from 'vue';
import App from './App.vue';
import './assets/scss/normalize.scss';
import './assets/scss/setting.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
