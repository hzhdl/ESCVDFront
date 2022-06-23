<template>
  <el-card class="sctool">
    <el-form ref="form" label-width="">
      <el-form-item label="编译器版本">
        <el-select v-model="selectversion" placeholder="请选择编译器">
          <el-option v-for="(i,index) in version" :key="index" :label="i.name" :value="i.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自动检测">
        <el-switch v-model="insert"></el-switch>
        <el-button type="primary" @click="complie">编译</el-button>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="copyABI">ABI</el-button>
        <el-button type="primary" @click="copyByteCode">ByteCode</el-button>
      </el-form-item>
    </el-form>
    <textarea class="result" disabled="">

      {{log}}
    </textarea>
  </el-card>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "sctool",
  data(){
    return {
      insert:true,
      log:'',
      form:{},
      selectversion:"",
      ABI:"",
      Bytecode:"",
      version:[
        // {
        //   name:"v0.4.25+commit.59dbf8f1",
        //   value:"soljson-v0.4.25+commit.59dbf8f1.js"
        // },
        // {
        //   name:"v0.5.7+commit.6da8b019",
        //   value:"soljson-v0.5.7+commit.6da8b019.js"
        // },
        {
          name:"v0.5.15+commit.6a57276f",
          value:"soljson-v0.5.15+commit.6a57276f.js"
        },{
          name:"v0.7.5+commit.eb77ed08",
          value:"soljson-v0.7.5+commit.eb77ed08.js"
        }
      ],
    }
  },
  methods:{
    copyABI(){
      if (this.ABI===""){
        this.$message.error('请先编译合约');
      }
      else
        navigator.clipboard.writeText(this.ABI)
    },
    copyByteCode(){
      if (this.ABI===""){
        this.$message.error('请先编译合约');
      }
      else
      navigator.clipboard.writeText(this.Bytecode)
    },
    datawash(res){
      let ress=res.contracts.test
      //console.log(ress)
      for (const ress1 in ress) {
        this.ABI=JSON.stringify(ress[ress1].abi)
        this.Bytecode=ress[ress1].evm.bytecode.object
        this.$store.state.abi=this.ABI
        this.$store.state.bytecode=this.Bytecode
        break
      }
    },
    complie(){
      if(this.selectversion===""){
        this.$message.error('请选择编译器版本');
      }
      else {
        this.$store.state.selectversion=this.selectversion
        this.ABI=""
        this.Bytecode=""
        this.$store.state.abi=""
        this.$store.state.bytecode=""
        pubsub.publish("compliecode")
        setTimeout(()=>{
          let myw = new Worker('../../static/solc/index.js')
          myw.postMessage(["start worker",this.$store.state.selectversion,this.$store.state.code])
          myw.onmessage= (e,data)=>{

            //this.log+=e.data[1].errors[0].formattedMessage + '\n' +e.data[1].errors[0].message + "\n\n"
            myw.terminate();
            this.datawash(e.data[1])
            console.log(e.data[1])
            this.log=this.Bytecode
            pubsub.publish("outlog",e)
            console.log('onmessage结束')
          }
          setTimeout(()=>{
            myw.terminate();
            console.log('worker结束')
          },5000)
        },1000)
      }
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.sctool{

  margin-right: 5px;
  border-radius: 5px;
  padding-left: 5px;
}
.result{
  width: calc(100% - 5px);
  border: black 3px solid;
  height: calc(100vh - 80px - 32px - 35px - 223px);
  background-color: white;
  color: black;
  overflow: auto;
}

</style>
