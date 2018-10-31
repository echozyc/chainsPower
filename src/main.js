// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import 'animate.css'


// import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

// Vue.use(Swiper)
Vue.use(MintUI)

//跳转路由回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
