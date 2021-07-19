import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import CONFIG from './Config/index'
console.log(CONFIG);
new Vue({
  render: h => h(App),
}).$mount('#app')
