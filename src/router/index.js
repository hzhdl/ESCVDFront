import Vue from 'vue'
import Router from 'vue-router'
import center from "../page/center";
import complie from "../page/complie";
import detect from "../page/detect";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"main",
      component:center
    },
    {
      path:"/center",
      name:"main",
      component:center
    },
    {
      path:"/complie",
      name:"main",
      component:complie
    },
    {
      path:"/detect",
      name:"main",
      component:detect
    }

  ]
})
