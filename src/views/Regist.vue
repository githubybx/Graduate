<template>
    <div class="home">
      <div class="regist">
        <div class="input">邮箱:<el-input placeholder="请输入邮箱" v-model="email" class="email"></el-input></div><br>
        <div class="input">密码:<el-input placeholder="请输入密码" v-model="pass" show-password></el-input></div><br>
        <div class="input">密码:<el-input placeholder="请输入确认密码" v-model="rePass" show-password></el-input></div><br>
        <div class="input">
        验证码:<el-input  v-model="vcode" placeholder="请输入验证码" ></el-input></div><br>
        <div class="buttonBorder">
        <el-button v-show="show" @click="getCode" class="button getVerify" v-model="scode">请获取验证码</el-button>
        <el-button v-show="!show" class="count button">{{count}} s</el-button>
       <el-button type="success" plain @click="handleClick()"  class="button">点击进行注册</el-button>
       </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {

  data () {
    return {
      email: '',
      pass: '',
      show: true,
      count: '',
      timer: null,
      vcode: '',
      rePass: '',
      // 请求的验证码
      scode: ''
    }
  },
  methods: {
    handleClick () {
      var emailTest = /^([0-9]{6,12}@qq.com)$/
      var passTest = /^([0-9a-zA-Z]{6,10})$/
      if (!emailTest.test(this.email)) {
        this.$message.error('邮箱格式错误')
      } else if (!passTest.test(this.pass)) {
        this.$message.error('密码格式错误')
      } else if (!passTest.test(this.rePass)) {
        this.$message.error('确认密码格式错误')
      } else if (this.pass !== this.rePass) {
        this.$message.error('两次密码不一致')
      } else if (this.vcode === '') {
        this.$message.error('验证码不为空')
      } else if (this.vcode !== this.scode) {
        console.log(this.scode)
        this.$message.error('验证码输入错误')
      } else {
        this.$message.success('注册成功')
        console.log(this.email + '  ' + this.pass)
      }
    },
    getCode () {
      var emailTest = /^([0-9]{6,12}@qq.com)$/
      if (!emailTest.test(this.email)) {
        this.$message.error('邮箱格式错误')
      } else {
        this.$store.commit('changeVerifyCode', '12121')
        console.log(this.$store.commit('changeVerifyCode'), '2121212')
        axios({
          method: 'post',
          url: 'http://localhost:8081/sendMail',
          data: { // 这里是发送给后台的数据
            email: this.email
          }
        }).then((response) => {
          console.log(response.data.data)
          this.scode = response.data.data
        }).catch(function (error) {
          console.log(error)
        })
      }
      // const TIME_COUNT = 60
      // if (!this.timer) {
      //   this.count = TIME_COUNT
      //   this.show = false
      //   this.timer = setInterval(() => {
      //     if (this.count > 0 && this.count <= TIME_COUNT) {
      //       this.count--
      //     } else {
      //       this.show = true
      //       clearInterval(this.timer)
      //       this.timer = null
      //     }
      //   }, 1000)
      // }
    }
    // getEmail () {
    //   // this.$store.commit('changeVerifyCode', '12121')
    //   // console.log(this.$store.commit('changeVerifyCode'), '2121212')
    //   // axios({
    //   //   method: 'post',
    //   //   url: 'http://localhost:8081/sendMail',
    //   //   data: { // 这里是发送给后台的数据
    //   //     email: data
    //   //   }
    //   // }).then((response) => {
    //   //   console.log(response.data.data)
    //   // }).catch(function (error) {
    //   //   console.log(error)
    //   // })
    // }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>
<style scoped>
div {
  margin: 0;
  padding: 0;
}
.home{
  width: 100%;
  height: 100%;
  border: 0px solid red;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../image/b.jpg');
  background-attachment: fixed;
  background-size: 100% 100%;
}
.buttonBorder{
  width: 100%;
  height: 10%;
  border: 0px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.button{
  height: 80%;
  width: 23%;
}
.regist{
  border:0px solid red;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.count{
  float: right;
}

</style>
