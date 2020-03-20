<template>
    <div class="goods">
        <div class="start">
            <div class="bottom">
              <el-button size="medium" @click="addGoods()">添加商品</el-button>
              <el-button size="medium" @click="returnPage()">点击返回</el-button>
            </div>
            <div class="middle">
                <tr>
                    <th><p>编号</p></th>
                    <th><p>产地</p></th>
                    <th><p>名称</p></th>
                    <th><p>修改</p></th>
                    <th class="last"><p>详情</p></th>
                </tr>
                <tr v-for="(item,index) in goodslist" :key="item.pname">
                    <td><p>{{item.pid}}</p></td>
                    <td><p>{{item.address}}</p></td>
                    <td><p>{{item.pname}}</p></td>
                    <td><el-button type="primary" plain @click="gotoDetail(item)">详细信息</el-button></td>
                    <td><el-button type="success" plain @click="gotoRemove(index)">点击删除</el-button></td>
                </tr>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    console.log('获取到了cookie')
    console.log(document.cookie)
    axios({
      url: 'http://localhost:8081/get/product/All',
      method: 'get',
      withCredentials: true
    }).then(res => {
      console.log(res.data.data)
      this.goodslist = res.data.data
      console.log(this.goodslist)
    })
  },
  data () {
    return {
      goodslist: ''
    }
  },
  methods: {
    returnPage () {
      this.$router.push('/start')
    },
    gotoDetail (item) {
      console.log(item.pid)
      this.$router.push({
        path: `/detail/${item.pid}`,
        query: {
          data: item
        }
      })
    },
    gotoRemove (index) {
      this.goodslist.splice(index, 1)
      console.log(index)
      console.log(this.goodslist)
    },
    addGoods () {
      this.$router.push('/addgoods')
    }
  }
}
</script>
<style scoped>
.goods{
    padding: 0;
    border: 0px solid red;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.start{
    height: 99%;
    width: 60%;
    border: 0px solid black;
}
.bottom{
    height: 10%;
    width: 100%;
    background-color: aquamarine;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: 1px solid black;
}
.middle{
    height: 90%;
    width: 100%;
}
tr{
    display: block;
    width: 100%;
    height: 8%;
    border: 1px solid yellow;
    background-color: blanchedalmond;
    display: flex;
}
th{
    width: 20%;
    height: 100%;
    align-content: center;
    line-height: 100%;
    border: 1px solid black;
}
td{
    width: 20%;
    height: 100%;
    align-content: center;
    line-height: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
  display: flex;
  border: 0px solid red;
  justify-content: center;
  align-items: center;
}
</style>
