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
export default {
  name: "center",
  data(){
    return{

    }
  },
  methods:{

  },
  created() {

  },
  mounted() {
    let chart1=document.getElementById("chart1")
    let chart2=document.getElementById("chart2")
    let chart3=document.getElementById("chart3")
    let chart4=document.getElementById("chart4")
    //['重入攻击', '交易顺序依赖', ' 未保护的SELFDESTRUCT', '时间戳依赖', '不安全的DelegatCall', 'Tx.origin授权漏洞']
    var myChart = echarts.init(chart1);
    myChart.setOption({
      title: {
        //
      },
      tooltip: {},
      xAxis: {
        data:["SWC-107","SWC-114","SWC-106","SWC-116","SWC-112","SWC-115"]
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
}
</script>

<style scoped>

.chart{
  height: calc((100vh - 80px - 32px - 45px) / 2);
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0px black;
}
</style>
