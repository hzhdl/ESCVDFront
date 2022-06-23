<template>
  <div>
    <div class="register">
      <form id="ajaxForm" class="login-wrap">

      </form>
      <div class="materialContainer">
        <div class="box">
          <div class="title">登录</div>
          <div class="input">
            <label for="name">用户名</label>
            <input type="text" name="name" id="name" v-model="name">
            <span class="spin"></span>
          </div>
          <div class="input">
            <label for="pass">密码</label>
            <input type="password" name="pass" id="pass" v-model="password">
            <span class="spin"></span>
          </div>
          <div class="button login">
            <button @click="login">
              <span>登录</span>
              <i class="fa fa-check"></i>
            </button>
          </div>
          <a href="javascript:" class="pass-forgot">忘记密码？</a>
        </div>

        <div class="overbox">
          <div class="material-button alt-2">
            <span class="shape"></span>
          </div>
          <div class="title">注册</div>
          <div class="input">
            <label for="regname">用户名</label>
            <input type="text" name="regname" id="regname" v-model="regname">
            <span class="spin"></span>
          </div>
          <div class="input">
            <label for="regpass">密码</label>
            <input type="password" name="regpass" id="regpass" v-model="regpass">
            <span class="spin"></span>
          </div>
          <div class="input">
            <label for="reregpass">确认密码</label>
            <input type="password" name="reregpass" id="reregpass" v-model="regrepass">
            <span class="spin"></span>
          </div>
          <div class="button">
            <button @click="register">
              <span>注册</span>
            </button>
          </div>
        </div>

      </div>

    </div>


    <canvas id="canvas" style="background:#000"></canvas>
  </div>
</template>

<script>

import "../assets/css/style1.css"
import "../assets/js/index"
import {login, register} from "../axios/API";


export default {
  name: "login",
  data(){
    return {
      name:'',
      password:'',

      regname:'',
      regpass:'',
      regrepass:'',
      detail:''

    }
  },
  methods:{
    init(){
      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      // 浏览器宽高
      var W = window.screen.availWidth;
      var H = window.screen.availHeight;
      canvas.width = W;
      canvas.height = H;
      var fontSize = 18;
      var colunms = Math.floor(W / fontSize);
      // 坐标
      var coordinate = [];
      for (var i = 0; i < colunms; i++) {
        coordinate.push(0);
      }
      var str = "javascript html5 canvas";
      function draw() {
        // 背景色
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        context.font = "800 " + fontSize + "px  宋体";
        // 字体颜色
        context.fillStyle = "#9da2ee";
        for (var i = 0; i < colunms; i++) {
          var index = Math.floor(Math.random() * str.length);
          var x = i * fontSize;
          var y = coordinate[i] * fontSize;
          context.fillText(str[index], x, y);
          if (y >= canvas.height && Math.random() > 0.88) {
            coordinate[i] = 0;
          }
          coordinate[i]++;
        }
      }

      function randColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
      }

      draw();
      setInterval(draw, 30);
    }
    ,
    login(){
      console.log(this.name,this.password)
      login(this.$store.state.urlpre,this.name,this.password).then((res)=>{
        if (res.code===1){
          console.log(res)
          this.$store.state.userid=res.count
          this.$store.state.username=res.data.username
          this.$router.push("/home")
        }
        else {
          this.$message.error(res.data)
        }
      })
    },
    register(){
      register(this.$store.state.urlpre,this.name,this.password).then((res)=>{
        this.$message.success(res.data)
      })
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style scoped>

</style>
