import axios from 'axios'

export const state = () => ({
  user: {},
  loggedIn: false,
})

export const getters = {
  getUser: (state) => state.user,
  isLoggedIn: (state) => state.loggedIn,
}

export const actions = {

  // Local Register / Login / Logout / Refresh

  async login ({ commit }, { email, password }) {
    const res = await this.$auth.$post('/user/login', {
      email, password
    }, {
      withCredentials: true
    })

    if (res) {
      window.location.href = '/'
    }
  },

  async logout ({ commit }) {
    const res = await this.$auth.$get('/user/logout', {
      withCredentials: true
    })

    if (res) {
      window.location.href = '/'
    }

    commit('setUser', {})
    commit('setLogin', false)
  },

  async register ({ commit }, { firstName, lastName, email, password }) {
    const res = await this.$auth.$post('/user/register', { firstName, lastName, email, password })

    console.log(res)
    return res
  },

  // Facebook Signing

  fbSignup () {
    window.open('https://develomancy-auth-api.herokuapp.com/api/facebook/auth', '_self')
  },


  // Google Signing

  googleSignup () {
    window.open('https://develomancy-auth-api.herokuapp.com/api/google/auth', '_self')
  },

  getUser ({ commit }, user) {
    if (user) {
      commit('setUser', user)
      commit('setLogin', true)
    } else {
      commit('setUser', {})
      commit('setLogin', false)
    }
  }

}

export const mutations = {
  setUser: (state, user) => state.user = user,
  setLogin: (state, login) => state.loggedIn = login,
}