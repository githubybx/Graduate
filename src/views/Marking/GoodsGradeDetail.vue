<template>
    <div class="out">
        <div class="inside">
            <div class="select1">
                <select @change="selectChange()" v-model="selectValue" class="select">
                    <option v-for="item in goodsList" :value="item" :key="item.pname">{{item.pname}}</option>
                </select>
            </div>
            <div id="draw"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
  data () {
    return {
      goodsList: [],
      xList: [],
      yList: [],
      selectValue: ''
    }
  },
  mounted () {
    axios({
      url: 'http://localhost:8081/get/emotion/all'
    }).then(res => {
      console.log(res.data.data)
      this.goodsList = res.data.data
    })
  },
  methods: {
    selectChange () {
      this.xList = []
      this.yList = []
      console.log(this.selectValue)
      if (this.selectValue.length !== 0) {
        for (var item in this.selectValue) {
          console.log(item)
          if (item !== 'grade' && item !== 'pid' && item !== 'pname') {
            this.xList.push(item)
            this.yList.push(this.selectValue[item])
          }
        }
      }
      console.log(this.xList)
      console.log(this.yList)
      this.$options.methods.drawLineChart(this.xList, this.yList)
    },
    drawLineChart (xdata, ydata) {
      console.log('触发了事件')
      const myChart = echarts.init(document.getElementById('draw'))
      var option = {
        title: {
          text: '商品人脸数据详情',
          x: 'center'
        },
        tooltip: {
        },
        legend: {
          data: ['数量'],
          x: 'right'
        },
        xAxis: {
          data: xdata
        },
        yAxis: {
        },
        series:
                [{
                  name: '数量',
                  type: 'bar',
                  data: ydata
                }]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style scoped>
#draw{
    width: 1600px;
    height: 300px;
}
.inside{
    width: 80%;
    height: 100%;
    border: 0px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.out{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px solid red;
    flex-direction: column;
    background-image: url('../../image/5.jpg');
    background-size: 100%;
}
.select{
    width: 100%;
    height: 100%;
    background-color: gainsboro;
    border: 1px solid red;
    align-self: flex-start;
}
.select1{
    align-self: flex-start;
    width: 6%;
    height: 5%;
}
</style>
