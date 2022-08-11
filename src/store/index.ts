import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: sessionStorage.getItem('userInfo') || "",
    test:"这是李锦鹏的vue3前端页面"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
