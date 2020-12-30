import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data:function(){
    return{
      isShowLoading:false
    }
  }
}).$mount('#app')
