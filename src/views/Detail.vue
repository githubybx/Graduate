<template>
<div class="detail">
    <div class="inside">
         <div class="bottom"></div>
        <tr v-for="(item,index) in goods" :key="item">
            <td>{{index}}</td>
            <td>{{item}}</td>
        </tr>
        <div class="button">
              <el-button @click="getReturn()">返回</el-button>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      goods: ''
    }
  },
  mounted () {
    console.log('haha')
    console.log(this.$route.query.data)
    this.goods = this.$route.query.data
  },
  methods: {
    getReturn () {
      this.$router.push('/goodslist')
    }
  }
}
</script>
<style scoped>
.detail{
    height: 100%;
    width: 100%;
    border:0px solid red;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.inside{
    height: 95%;
    width: 40%;
    border:0px solid red;
}
.bottom{
    height: 10%;
    width: 100%;
    background-color: lightgreen;
}
tr{
    display: block;
    width: 100%;
    height: 10%;
    border: 0px solid red;
    display: flex;
    background-color: beige;
}
td{
    width: 50%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}
td:hover{
    background-color: lightcyan;
}
.button{
    position: relative;
    margin-top: 8%;
    margin-left: 60%;
    width: 10%;
    height: 8%;
    float: right;
}
</style>
