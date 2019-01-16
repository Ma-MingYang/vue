// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {get, post} from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$get = get;
Vue.prototype.$post = post;

// 搞定ueditor
import '../static/UEditor/ueditor.config.js'
import '../static/UEditor/ueditor.all.min.js'
import '../static/UEditor/lang/zh-cn/zh-cn.js'
import '../static/UEditor/ueditor.parse.min.js' 

// 引入echarts
// import echarts from 'echarts'

// Vue.prototype.$echarts = echarts 
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
