<template>
    <div class="outside">
        <div class="search">
            <div class="top">
                <el-input  placeholder="请输入搜索内容" class="input1" v-model="inputSearch" ></el-input>
                <el-button type="primary" icon="el-icon-search" class="input2" @click="valueChange()">搜索</el-button>
            </div>
            <div class="bottom">
                    <li v-for="item in goodslist1" :key="item.pid" @click="gotoGoods(item)"><p>-------------------->{{item.pname}}</p></li>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      inputSearch: '',
      goodslist: [],
      goodslist1: []
    }
  },
  mounted () {
    axios({
      url: 'http://localhost:8081/get/product/All',
      method: 'get'
    }).then(res => {
      console.log(res.data.data)
      this.goodslist = res.data.data
      console.log(this.goodslist)
    })
  },
  methods: {
    // 搜索框的数据发生变化时，就会触发该函数
    valueChange () {
      this.goodslist1 = this.goodslist.filter(res => {
        return res.pname.indexOf(this.inputSearch.trim()) > -1
      })
    },
    // 跳转到物品详情页面
    gotoGoods (item) {
      this.$router.push({
        path: `/detail/${item.pid}`,
        query: {
          data: item
        }
      })
    }
  }
}
</script>
<style scoped>
  /* 最外边的一层 */
  .outside{
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      padding: 0;
      left: 0;
      position: fixed;
      border: 0px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url('../../image/j.jpg')
  }
  .search{
      width: 40%;
      height: 80%;
      top: 0;
      bottom: 0;
      padding: 0;
      left: 0;
      border: 0px solid red;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
  }
  /* 搜索栏 */
  .top{
      width: 100%;
      height: 10%;
      border: 0px solid red;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }
  /* 显示搜索出来的东西 */
  .bottom{
      width: 100%;
      height: 80%;
      border: 0px solid red;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 2%;
  }
  li{
      display: block;
      width: 80%;
      height: 10%;
      border: 0px solid red;
      opacity: 0.4;
      background-color: cornsilk;
      border: 1px solid black;
      line-height: 100%;
  }
  li:hover{
      background-color: aquamarine;
      color: red;
  }
</style>
