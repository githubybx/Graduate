<template>
    <div class="out">
        <div id="echart"></div>
    </div>
</template>
<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
  data () {
    return {
      gradeList: [],
      xList: [],
      yList: []
    }
  },
  mounted () {
    axios({
      url: 'http://localhost:8081/get/emotion/all'
    }).then(res => {
      this.gradeList = res.data.data
      console.log(this.gradeList.length)
      for (var i = 0; i < this.gradeList.length; i++) {
        // console.log(this.gradeList[i].pname)
        // console.log(this.gradeList[i].grade)
        this.xList.push(this.gradeList[i].pname)
        this.yList.push(this.gradeList[i].grade)
      }
      console.log(this.xList)
      console.log(this.yList)
      this.drawLineChart()
    })
  },
  methods: {
    drawLineChart () {
      const myChart = echarts.init(document.getElementById('echart'))
      myChart.setOption(
        {
          title: {
            text: '商品评分趋势图',
            x: 'center'
          },
          tooltip: {
            trigger: 'axis'

          },
          legend: {
            data: ['分数'],
            x: 'right'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.xList
          },
          yAxis: {
            type: 'value'
          },
          series:
                [{
                  name: '分数',
                  type: 'line',
                  // 设置折线图颜色
                  itemStyle: {
                    normal: {
                      lineStyle: {
                        color: '#4876FF'
                      }
                    }
                  },
                  stack: '总量',
                  data: this.yList
                }]
        }
      )
    }
  }
}
</script>
<style scoped>
#echart{
    width: 40%;
    height: 80%;
}
.out{
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}
.out::before{
    content: '';
    width: 100%;
    height: 100%;
    position: fixed;
    background-image: url('../../image/2.jpg');
    background-size: 100%;
    left: 0;
    top: 0;
    opacity: 0.8;
}

</style>
