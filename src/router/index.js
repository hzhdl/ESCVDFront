import Vue from 'vue'
import Router from 'vue-router'
import center from "../page/center";
import detect from "../page/detect";
import login from "../page/login";
import All from "../components/All";
import complie from "../page/complie";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:'login'
    },
    {
      path:"/login",
      name:"login",
      component: login
    },
    {
      path:"/home",
      component: All,
      children:[
        {
          path:"/",
          redirect:'center'
        },
        {
          path:"center",
          name:"center",
          component:center
        },
        {
          path:'compile',
          name:'compile',
          component: complie
        },
        {
          path:"detect",
          name:"detect",
          component:detect
        }
      ]
    },


  ]
})
