<template>
  <div class="login">
    <div class="table">
    <div class="input"> 邮箱:<el-input placeholder="请输入邮箱" v-model="email"></el-input></div>
    <div class="input">密码:<el-input placeholder="请输入密码" v-model="pass"></el-input></div>
    <div><el-row>
       <el-button type="success" plain @click="doLogin()">登录</el-button>
       <el-button type="success" plain @click="doRegist()">注册</el-button>
    </el-row></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    doLogin () {
      var emailTest = /^([0-9]{6,12}@qq.com)$/
      var passTest = /^([0-9a-zA-Z]{6,10})$/
      if (!emailTest.test(this.email)) {
        this.$message.error('邮箱格式错误')
      } else if (!passTest.test(this.pass)) {
        this.$message.error('密码格式错误')
      } else {
        var that = this
        axios({
          url: 'http://localhost:8081/java/login',
          method: 'post',
          withCredentials: true,
          data: {
            email: that.email,
            pass: that.pass
          }
        }).then((res) => {
          if (res.data.code !== 1000002) {
            this.$message.error('账号密码有误')
          } else {
            this.$store.commit('AddEmail', this.email)
            this.$message.success('登陆成功')
            this.$router.push({
              name: 'start',
              params: {
                email: that.email,
                pass: that.pass
              }
            })
          }
          console.log(res)
        })
        // this.$router.push('/start/')
      }
    },
    doRegist () {
      this.$router.push('/regist')
    }
  },
  mounted () {
    console.log('全局变量')
    console.log(this.$store.state.email)
  }
}
</script>
<style>
.input{
  width: 300px;
  height: 100px;
}
.login{
  width: 100%;
  height: 100%;
  position: absolute;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-image: url(../image/e.jpg);
  background-repeat:repeat-x;
  background-size: 100% 100%;
  background-attachment:fixed;
  overflow: hidden;
}
.table{
  display: inline-block;
  margin-top: 10%;
}
</style>
