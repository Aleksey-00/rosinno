let state = {
  users: [
    {
      id: 1,
      login: 'Capitan Vrungel',
      password: 'trololo',
      icon: require('../assets/user-icon.png')
    },
    {
      id: 2,
      login: 'Harry Potter',
      password: 'hogwards',
      icon: require('../assets/user-icon.png')
    },
    {
      id: 3,
      login: 'Dumble Door',
      password: 'i am root',
      icon: require('../assets/user-icon.png')
    },
    {
      id: 4,
      login: 'Chikens',
      password: 'chick chick',
      icon: require('../assets/user-icon.png')
    },
    {
      id: 5,
      login: 'Dydya Fedor',
      password: 'prostokvashino',
      icon: require('../assets/user-icon.png')
    },
    {
      id: 6,
      login: 'Laluna',
      password: 'this is song',
      icon: require('../assets/user-icon.png')
    }
  ]
}
let getters = {
  USERS: state => state.users,
  LASTID: state => state.users.length
}
let mutations = {
  ADD_USER: (state, payload) => {
    state.users.push(payload)
  },

  UPDATE_USER: (state, payload) => {
    state.users.map((item, index) => {
      if (parseInt(item.id) === parseInt(payload.id)) {
        state.users[index] = payload
      }
    })
  },

  DELETE_USER: (state, payload) => {
    state.users.map((item, index) => {
      if (parseInt(item.id) === parseInt(payload.id)) {
        state.users.splice(index, 1)
      }
    })
  }
}
let actions = {
  ADD_USER: ({commit}, payload) => {
    commit('ADD_USER', payload)
  },

  UPDATE_USER: ({commit}, payload) => {
    commit('UPDATE_USER', payload)
  },

  DELETE_USER: ({commit}, payload) => {
    commit('DELETE_USER', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
