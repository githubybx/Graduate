<template>
    <div class="ShowOwn">
        <div class="outside">
            <div class="form1">
                <tr v-for="(item,index) in Userinfo" v-show="Userinfo" :key="item.sid">
                    <td class="left"><p>{{index}}</p></td><td class="right"><p>{{item}}</P></td>
                </tr>
            </div>
            <div class="button">
                  <el-button type="primary" @click="returnOwn">点击返回</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      Userinfo: ''
    }
  },
  methods: {
    returnOwn () {
      this.$router.push('/start')
    }
  },
  mounted () {
    var myemail = '401129874@qq.com'
    axios({
      url: 'http://localhost:8081/post/findByEmail',
      method: 'get',
      params: {
        email: myemail
      }
    }).then(res => {
      console.log('请求个人信息数据')
      this.Userinfo = res.data.data
      console.log(res.data.data)
    }).catch(res => console.log('请求数据失败'))
  }
}
</script>
<style scoped>
.ShowOwn{
    width: 100%;
    height: 100%;
    border: 0px solid red;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../image/f.jpg');
    background-attachment: fixed;
    background-size: 100% 100%;

}
.outside{
    width: 40%;
    height: 90%;
    border: 0px solid red;
}
tr{
    display: block;
    width: 100%;
    height: 10%;
}
.item{
    width: 100%;
    height: 10%;
    border: 0px solid black;
    margin: auto;
}
td{
    display: inline-block;
    width: 49.6%;
    height: 100%;
    border: 1px solid black;
    text-align: center;
    content: '';
}
.button{
    margin-top: 4%;
    border:0px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form1{
     background-color: wheat;
     border: 0px solid yellow;
     box-shadow: 40px 40px 20px  aquamarine;
     opacity: 0.4;
     color: rgb(47, 0, 255);
}
</style>
