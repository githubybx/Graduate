<template>
  <div id="Myown">
    <div id="form">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="个人昵称"  prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="date">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" ></el-date-picker>
        </el-form-item>
        <el-form-item label="兴趣爱好" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="打篮球" name="type"></el-checkbox>
            <el-checkbox label="踢足球" name="type"></el-checkbox>
            <el-checkbox label="打兵乓球" name="type"></el-checkbox>
            <el-checkbox label="读书" name="type"></el-checkbox>
            <el-checkbox label="打游戏" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="个人简介" prop="desc">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
         <el-form-item label="地址" prop="address">
            <el-cascader v-model="form.address" :options="options"></el-cascader>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" @click="submitForm('form')">立即添加</el-button>
           <el-button @click="resetForm('form')" id="button">立即重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import array from '../Other/country-level3-data.js'
import axios from 'axios'
export default {
  data () {
    return {
      myemail: '401129874@qq.com',
      sid: '',
      form: {
        name: '',
        date: '',
        type: [],
        resource: '',
        desc: '',
        email: this.myemail,
        phone: '',
        address: []
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个兴趣爱好', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请输入个人介绍', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        address: [
          { type: 'array', required: true, message: '请选择地址', trigger: 'change' }
        ]
      },
      options: array
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            url: 'http://localhost:8081/get/SaveOrUpdateUserInfo',
            method: 'post',
            data: {
              form: {
                sname: this.form.name,
                birth: this.form.date,
                hobby: this.form.type.toString(),
                sex: this.form.resource,
                info: this.form.desc,
                email: this.form.email,
                phone: this.form.phone,
                address: this.form.address.toString(),
                sid: this.sid
              }
            }
          }).then((res) => {
            console.log(res)
            alert('submit!')
            this.$router.go(-1)
          }).catch(res => console.log(res))
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    this.email = this.$route.params.email
    axios({
      url: 'http://localhost:8081//post/findByEmail',
      method: 'get',
      params: {
        email: '401129874@qq.com'
      }
    }).then(res => {
      console.log(res.data.data.sid)
      this.sid = res.data.data.sid
    })
    console.log(this.$route.params.email)
    console.log(this.myemail)
  }
}
</script>
<style scoped>
#form{
  width: 50%;
  margin: 0 auto;
  margin-top: 2%;
}
#button{
  float: right;
}
#Myown:before{
  content: '';
  background-image: url(../image/a.jpg);
  background-attachment: fixed;
  background-size: 100% 100%;
  height: 100%;
  position: absolute;
  width: 100%;
  opacity: 0.4;
}
#Myown{
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
