import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: sessionStorage.getItem('userInfo') || "",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
