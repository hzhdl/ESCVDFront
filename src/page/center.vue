<template>
  <div class="charts">
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <div id="chart1" class="chart"></div>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <div id="chart2" class="chart"></div>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <div id="chart3" class="chart"></div>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <div id="chart4"class="chart"></div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {getchart1, getchart2, getchart3, getchart4} from "../axios/API";
export default {
  name: "center",
  data(){
    return{
      vulntype:["SWC-107","SWC-114","SWC-106","SWC-116","SWC-112","SWC-115"],
    }
  },
  methods:{
    dataw(data) {
      console.log(data)
      let result=[];
      for (let i = 0; i < data.length; i++) {
        result.push({name:this.vulntype[i],value:data[i]})
      }
      console.log(result)
      return result;
    }
  },
  created() {

  },
  mounted() {
    //测试数据


    let chart1=document.getElementById("chart1")
    let chart2=document.getElementById("chart2")
    let chart3=document.getElementById("chart3")
    let chart4=document.getElementById("chart4")
    //['重入攻击', '交易顺序依赖', ' 未保护的SELFDESTRUCT', '时间戳依赖', '不安全的DelegatCall', 'Tx.origin授权漏洞']
    getchart1(this.$store.state.urlpre,this.$store.state.userid,1).then((res)=>{
      var myChart = echarts.init(chart3);
      let option={
        title: {
          text:"合约数量",
          left:'center'
        },
        tooltip: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: res.data.xtext,

          //["SWC-107","SWC-114","SWC-106","SWC-116","SWC-112","SWC-115"]
        },
        yAxis: {
          minInterval:1
        },
        series: [
          {
            type: 'bar',
            data: res.data.data
          }
        ]
      }
      myChart.setOption(option);
    })
    getchart2(this.$store.state.urlpre, this.$store.state.userid, 1).then((res)=>{
      var myChart = echarts.init(chart4);
      let option={
        title: {
          text:"漏洞数量",
          left:'center'
        },
        color:['#a4e0f7'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#85d9e8'
            }
          }
        },
        // legend: {
        //   data: ['vulnerability']
        // },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: res.data.xtext
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'vulnerability',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: res.data.data
          }
        ]
      }
      myChart.setOption(option);
    })
    getchart3(this.$store.state.urlpre, this.$store.state.userid, 1).then((res)=>{
      var myChart = echarts.init(chart1);
      let option={
        title: {
          text:"合约--漏洞",
          left:'center'
        },
        color:['#ee6666','#5470c6','#90cc75','#fac858'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#85d9e8'
            }
          }
        },
        // legend: {
        //   data: ['vulnerability']
        // },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: res.data.xtext
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'vulnerability',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: res.data.data
          }
        ]
      }
      myChart.setOption(option);
    })
    getchart4(this.$store.state.urlpre, this.$store.state.userid, 1).then((res)=>{
      console.log(res)
      var myChart = echarts.init(chart2);
      let option={
        title: {
          text:"漏洞类型",
          left:'center'
        },
        color:['#a4e0f7','#5470c6','#90cc75','#fac858',
          '#ee6666','#fc8452'],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.dataw(res.data),
          }
        ]
      }
      myChart.setOption(option);
    })

  },

}
</script>

<style scoped>

.chart{
  height: calc((100vh - 80px - 32px - 45px) / 2);
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px -5px black;
}
</style>
