<template>
  <div id="start">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>产品列表
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1" @click="showList()">展示列表</el-menu-item>
              <el-menu-item index="1-2" @click="searchgoods()">搜索产品</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>数据处理
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1" @click="upload()">数据上传</el-menu-item>
              <el-menu-item index="3-2" @click="goodsGrade()">商品评分</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3" @click="goodsEmotinDetail()">商品数据详情</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>我的信息
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1" @click="editOwn()">编辑个人信息</el-menu-item>
              <el-menu-item index="2-2" @click="showOwn()">查看个人信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >查看</el-dropdown-item>
              <el-dropdown-item >编辑</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{name}}</span>
        </el-header>

        <el-main>
          <div>这是中间的区域</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
#start {
  width: 100%;
  height: 100%;
  position: absolute;
  border: ０px solid red;
}
</style>

<script>
export default {
  data () {
    return {
      name: this.$store.state.email
    }
  },
  methods: {
    editOwn () {
      console.log('编辑个人信息')
      this.$router.push({
        name: 'Myown',
        params: {
          email: this.name
        }
      }
      )
    },
    searchgoods () {
      this.$router.push('/searchgoods')
    },
    showOwn () {
      this.$router.push('/ShowOwn')
    },
    // 展示产品列表
    showList () {
      this.$router.push('/goodslist')
    },
    upload () {
      this.$router.push('/uploadimage')
    },
    goodsGrade () {
      this.$router.push('/goodsGrade')
    },
    goodsEmotinDetail () {
      this.$router.push('/goodsgradedetail')
    }
  },
  mounted () {
    // console.log('全局变量')
    // console.log(this.$store.state.email)
    // console.log('获取到了cookie')
    // console.log(document.cookie)
    var list = []
    if (document.cookie !== '') {
      console.log(document.cookie)
      list = document.cookie.split(';')
      for (var i = 0; i < list.length; i++) {
        var mid = list[i]
        var mid1 = mid.split('=')
        var email = mid1[0]
        console.log(email.trim())
        if (email.trim() === 'email') {
          this.name = mid1[1].trim()
          break
        }
      }
    }
  }
}
</script>
