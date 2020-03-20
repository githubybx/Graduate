import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: ''
  },
  mutations: {
    AddEmail (state, str) {
      console.log(state)
      console.log(str)
      this.state.email = str
      console.log(this.state.email)
    }
  },
  actions: {
  },
  modules: {
  }
})
