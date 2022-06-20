// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/icon/iconfont.css'
import '@/assets/css/my-task.style.css'
import '@/assets/js/template.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import "codemirror/theme/ambiance.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
import "./assets/css/mycss.css";



Vue.config.productionTip = false
Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

