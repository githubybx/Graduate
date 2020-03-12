import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    verifyCode: '1111'
  },
  mutations: {
    changeVerifyCode (statue, num) {
      console.log(this.state.verifyCode)
      this.state.verifyCode = num
      console.log('修改全局变量')
      console.log(this.state.verifyCode)
    }
  },
  actions: {
  },
  modules: {
  }
})
