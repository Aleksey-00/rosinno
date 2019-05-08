import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../store/auth'
import users from '../store/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    users
  }
})
