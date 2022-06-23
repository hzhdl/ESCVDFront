<template>
  <div class="dectect">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple">
        <el-card class="box-card" >
          <div slot="header" class="clearfix" >
            合约漏洞检测
          </div>
          <el-form :inline="true"  label-position="right" class="demo-form-inline">
            <el-form-item  label="合约名">
              <el-input  v-model="name" placeholder="" ></el-input>
            </el-form-item>
            <el-form-item label="编译器版本">
              <el-select v-model="selectversion" placeholder="请选择编译器">
                <el-option v-for="(i,index) in version" :key="index" :label="i.name" :value="i.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="漏洞类型">
              <el-select v-model="vuln"  placeholder="">
                <el-option v-for="(i,index) in vulntype" :key="index" :label="i" :value="index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="detectsc">检测</el-button>
            </el-form-item>
          </el-form>
          <el-form :inline="true"  label-position="right" class="demo-form-inline">
            <el-form-item label="字节码">
              <el-input type="textarea" class="bytecode" v-model="code"></el-input>
            </el-form-item>
          </el-form>

        </el-card>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="cardtittle">历史记录</span>
          </div>
          <el-table
            id="table"
            :data="tableData"
            style="width: 100%"
            height="348"
            :default-sort = "{prop: 'SID', order: 'descending'}"
          >
            <el-table-column
              prop="SID"
              label="合约名"
              sortable
            >
              <template slot-scope="scope">

                <span style="margin-left: 10px">{{ scope.row.smartcontractname }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="SID"
              label="用户名"
              sortable
            >
              <template slot-scope="scope">

                <span style="margin-left: 10px">{{ scope.row.username }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="SID"
              label="字节码"
              width="300"
              sortable
            >

              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>{{ scope.row.bytecode }}</p>
                  <div slot="reference" class="name-wrapper">
                    <span>{{ scope.row.bytecode.substring(0,20) }}</span>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column
              prop="SID"
              label="时间"
              sortable
            >
              <template slot-scope="scope">

                <span style="margin-left: 10px">{{ scope.row.timestamp }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="Sname"
              label="漏洞"
              sortable
            >
              <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium" v-for="(ite,index) in scope.row.vulnid" :key="index" :hidden="ite===0">{{ vulntype[index+1] }}</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              width="200px"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            class="pagination"
            :current-page="pages"
            :page-sizes="[10 , 15 , 20, 30]"
            :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalpage">
          </el-pagination>
        </el-card>
      </div></el-col>
    </el-row>

  </div>
</template>

<script>
import {addcomplie, gethisinfo} from "../axios/API";

export default {
  name: "detect",
  data(){
    return {
      code: "",
      limit: 10,
      pages: 1,
      totalpage: 0,
      name:'',
      selectversion:'',
      vuln:'',
      version:[
        {
          name:"v0.5.15+commit.6a57276f",
          value:"soljson-v0.5.15+commit.6a57276f.js"
        },{
          name:"v0.7.5+commit.eb77ed08",
          value:"soljson-v0.7.5+commit.eb77ed08.js"
        }
      ],
      vulntype:["ALL","SWC-107","SWC-114","SWC-106","SWC-116","SWC-112","SWC-115"],
      tableData: [],
    }
  },
  mounted() {
    this.freshdata()
  },
  methods:{
    detectsc(){
      if(this.code===''||this.vuln===''||this.selectversion===""||this.name===""){
        this.$message.error("请确保所有信息正确填写！")
        return
      }else {
        addcomplie(this.$store.state.urlpre,this.$store.state.userid,this.name,this.code,this.vuln).then((res)=>{
          this.$message.success("检测成功")
        })
      }
      console.log(this.code,this.vuln,this.name,this.selectversion)
    },
    freshdata(){
      var that=this
      gethisinfo(this.$store.state.urlpre,this.$store.state.userid,1,this.limit,this.pages).then((res)=>{
        this.tableData=this.datawash(res.data)
        that.totalpage=res.count;
      }).catch(function (error){
          console.log(error)
        })
    },
    handleSizeChange(val) {
      this.limit=val;
      this.freshdata()
    },
    handleCurrentChange(val) {
      this.pages=val;
      this.freshdata()
    },
    calcbit(n){
      let dataa=[0,0,0,0,0,0];
      let count=5;
      let str='';
      while (n){
        str+= "  "+n%2
        if (n%2===1){
          dataa[count]=1
          count--;
          n=n-1;
        }
        n/=2;
      }
      //console.log(str)
      return dataa
    },
    datawash(data){
      for (const datum of data) {
        datum.timestamp=datum.timestamp.substring(0,10) +" "+ datum.timestamp.substring(12,19)
        datum.vulnid=this.calcbit(datum.vulnid)
      }
      console.log(data)
      return data
    }
  }
}
</script>

<style scoped>

.dectect{
  background-color: #eeeeee;
  border-radius: 10px;

}
.bytecode{
  width: calc( 100vw - 300px);
}

</style>
