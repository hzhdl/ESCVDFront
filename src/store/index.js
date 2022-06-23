import Vue from 'vue'
import Vuex from 'vuex'


//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
  state:{
    urlpre: 'http://172.16.0.62:8082/',
    userid: '',
    username:'',

    selectversion: "",
    code:"",
    bytecode:"",
    abi:"",


  },
  mutations:{


  },
  actions:{


  },
  getters:{


  },
  modules:{

  }
})
//3.导出使用
export default store
