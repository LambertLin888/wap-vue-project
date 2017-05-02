import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import VueScroller from 'vue-scroller'
import VueResource from 'vue-resource';
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);  //全局引入swiper
Vue.use(VueScroller);       //全局引入scroller
Vue.use(VueResource);       //全局引入resource
Vue.use(VueLazyload, {
  error: 'http://m.quanqiuwa.com/static/css/wap/img/bg_more_large2x.png',
  loading: 'http://m.quanqiuwa.com/static/css/wap/img/bg_more_large2x.png',
  attempt: 1 // default 1
})
 new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})