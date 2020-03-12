<template>
    <div class="outside">
        <div class="form">
            <tr>
                <td class="left"><font color="red">*</font>商品图片</td>
                <td class="right"><input type="text" placeholder="输入图片路径" v-model="image"></td>
            </tr>
            <tr>
                <td class="left"><font color="red">*</font>产期</td>
                <td class="right"><input type="date" v-model="data"></td>
            </tr>
            <tr>
                <td class="left"><font color="red">*</font>简介</td>
                <td class="right"><input type="text" placeholder="输入产品简介" v-model="info"></td>
            </tr>
            <tr>
                <td class="left"><font color="red">*</font>产地</td>
                <td class="right"><input type="text" placeholder="输入产品产地" v-model="address"></td>
            </tr>
            <tr>
                <td class="left"><font color="red">*</font>名称</td>
                <td class="right"><input type="text" placeholder="输入产品名称" v-model="pname"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
             <tr>
                <td class="left">
                    <el-button @click="reset()">重置</el-button>
                </td>
                <td class="right right1">
                    <el-button @click="addgoods()">添加</el-button>
                    <el-button @click="returngoods()">返回</el-button>
                </td>
            </tr>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      image: '',
      address: '',
      data: '',
      info: '',
      pname: '',
      grade: 0
    }
  },
  methods: {
    reset () {
      this.image = ''
      this.address = ''
      this.data = ''
      this.info = ''
      this.pname = ''
      this.grade = 0
    },
    addgoods () {
      if (this.image === '') {
        this.$message.error('image不为空')
      } else if (this.address === '') {
        this.$message.error('address不为空')
      } else if (this.data === '') {
        this.$message.error('data不为空')
      } else if (this.info === '') {
        this.$message.error('info不为空')
      } else if (this.pname === '') {
        this.$message.error('pname不为空')
      } else if (this.address === '') {
        this.$message.error('grade不为空')
      } else {
        axios({
          url: 'http://localhost:8081/post/produce/updateOrAdd',
          method: 'post',
          data: {
            image: this.image,
            address: this.address,
            data: this.data,
            info: this.info,
            pname: this.pname,
            grade: this.grade
          }
        }).then(
          res => {
            console.log(res)
            this.$message.success('添加商品信息成功')
          })
      }
    },
    returngoods () {
      this.$router.push('/goodslist')
    }
  }
}
</script>
<style scoped>
.outside{
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 0px solid red;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gainsboro;
}
.form{
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    border: 0px solid red;
    width: 40%;
    height: 80%;
}
tr{
    width: 100%;
    height: 10%;
    border: 0px solid red;
    display: flex;
}
.left{
    width: 40%;
    height: 100%;
    border: 0px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right{
    width: 60%;
    height: 100%;
    border: 0px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    width: 80%;
    height: 80%;
}
</style>
