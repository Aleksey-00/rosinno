let state = {
  admin: {
    login: 'Alex',
    password: 'test123'
  },
  token: localStorage.getItem('user-token') || ''
}

let getters = {
  ADMIN: state => state.admin,
  ISAUTH: state => !!state.token
}

let mutations = {
  SET_TOKEN: (state, payload) => {
    state.token = payload
  }
}

let actions = {
  SET_TOKEN: ({commit}, payload) => {
    commit('SET_TOKEN', payload)
    localStorage.setItem('user-token', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
