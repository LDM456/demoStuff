// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 导入全局组件
import ButtonFirst from "@/components/button/button.js"
Vue.use(ButtonFirst)

// 挂载构造组件
import Message from "@/components/message/message.js"
Vue.prototype.$message = Message


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})