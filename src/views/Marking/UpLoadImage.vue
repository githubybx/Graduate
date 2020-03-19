<template>
<!-- 此模块为上传文件模块 -->
<div class="out">
  <div class="second">
    <div class="imageBorder">
      <div class="select">
        <input type="file" ref="file" multiple="multiple" @change="getfilelist" id="multi" class="inputMulti">
        <label class="label" for="multi">+</label>
      </div>
   </div>
   <div class="li">
       <li v-for="item in filelist" :key="item.pid">
         {{item.name}}
       </li>
       <div class="button">
         <p>请选择产品:</p>
          <el-select v-model="value" placeholder="请选择产品" >
              <el-option
                v-for="item in goodslist"
                :key="item.pid"
                :label="item.pname"
                :value="item.pid">
              </el-option>
          </el-select>
       </div>
       <div>
          <el-button @click="upLoadFile()" class="button">点击上传</el-button>
      </div>
   </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      file: '',
      filename: '',
      FormData: '',
      filelist: '',
      value: '',
      goodslist: []
    }
  },
  methods: {
    getfilelist (e) {
      this.filelist = e.target.files
      for (var i = 0; i < this.filelist.length; i++) {
        console.log(this.filelist[i].name)
      }
    },
    upLoadFile () {
      const formData = new FormData()
      var len = this.$refs.file.files.length
      console.log(this.$refs.file.files[0])
      console.log(len)
      for (var i = 0; i < len; i++) {
        formData.append('file', this.$refs.file.files[i])
      }
      formData.append('pid', this.value)
      var instance = axios.create({
        baseURL: 'http://localhost:8081',
        timeout: 1000,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      instance.post('/uploadfile', formData).then(res => {
        console.log('hahah')
        this.filelist = ''
        this.$confirm('上传成功', '提示', {
          confirmBUttonText: '确认'
        }).then(res => console.log('上传成功')).catch(res => console.log('出错'))
      })
    }
  },
  mounted () {
    axios({
      url: 'http://localhost:8081/get/product/All',
      method: 'get'
    }).then(res => {
      console.log(res.data.data)
      this.goodslist = res.data.data
    })
  }
}
</script>
<style scoped>
.imageBorder{
  z-index: -1;
}
.label{
  width: 100px;
  height: 100px;
  border:1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  color: gold;
  background-color: bisque;
}
.inputMulti{
  width: 0px;
  height: 0px;
  opacity: 0;
  float: left;
}
.li{
  margin-top: 40px;
}
.button{
   margin-top: 40px;
}
li{
  width: 400px;
  height: 40px;
  background-color: rgb(174, 222, 245);
  margin-top: 10px;
  border: 1px solid blueviolet;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  opacity: 0.6;
}
.out{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  position: absolute;
  border: 0px solid red;
  overflow-x: hidden;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
}
.second{
  width: 40%;
  height: 80%;
  border: 0px solid red;
}
</style>
