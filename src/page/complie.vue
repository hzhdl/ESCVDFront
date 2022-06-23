<template>
  <div class="SCCOM">
    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple">
        <Sctool></Sctool>
      </div></el-col>
      <el-col :span="20"><div class="grid-content bg-purple-light">
        <textarea ref="mycode" class="codesql" v-model="code" style="height:calc(100vh - 80px - 32px - 35px);width:600px;"></textarea>
        <textarea class="result" disabled="">

          {{log}}
        </textarea>
      </div></el-col>
    </el-row>

  </div>
</template>

<script>
let CodeMirror = require("codemirror/lib/codemirror");
require("codemirror/addon/edit/matchbrackets");
require("codemirror/addon/selection/active-line");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");
import Sctool from "../components/sctool";
import pubsub from "pubsub-js";

export default {
  name: "complie",
  components: {Sctool},
  data(){
    return {
      code:'',
      log:'',

    }
  },
  methods:{
    test (code,version) {
      let myw = new Worker('../../static/solc/index.js')
      myw.postMessage(["start worker",version,code])
      myw.onmessage= (e,data)=>{
        console.log(e.data[1])
        myw.terminate();
        console.log('onmessage结束')
      }
      setTimeout(()=>{
        myw.terminate();
        console.log('worker结束')
      },5000)
    }
  },
  mounted() {

    let mime = 'text/x-mariadb'
    //let theme = 'ambiance'//设置主题，不设置的会使用默认主题
    let editor = CodeMirror.fromTextArea(this.$refs.mycode, {
      mode: mime,//选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets: true,
      //theme: theme,
      // autofocus: true,
      extraKeys: {'Ctrl': 'autocomplete'},//自定义快捷键
      hintOptions: {//自定义提示选项
        tables: {
          users: ['name', 'score', 'birthDate'],
          countries: ['name', 'population', 'size']
        }
      }
    })
    //代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
    editor.on('cursorActivity', function () {
      //editor.showHint()
    })


    pubsub.subscribe("compliecode",(msg,res)=>{
      this.code=editor.getValue()
      if(this.code===""){
        console.log(editor.getValue())
        this.$message.error('请输入代码,不要为空');
      }
      else {
        //console.log(this.$refs.mycode)
        this.$store.state.code = this.code
      }
    })
    pubsub.subscribe("outlog",(msg,e)=>{
      this.code=editor.getValue()
      this.log+=e.data[1].errors[0].formattedMessage + '\n' +e.data[1].errors[0].message + "\n\n"
    })
  }
}
</script>

<style scoped>
.codesql{

}
.result{
  width:100%;
  border: black solid 1px;
  height: 150px;
  background-color: white;
  color: black;
  overflow: auto;
}
</style>
