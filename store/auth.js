import axios from 'axios'

export const state = () => ({
  user: {},
  accessToken: '',
  refreshToken: '',
  loggedIn: false,
  fbLoggedIn: false,
  googleLoggedIn: false
})

export const getters = {
  getUser: (state) => state.user,
  isLoggedIn: (state) => state.loggedIn,
  getAccessToken: (state) => state.accessToken,
  getRefreshToken: (state) => state.refreshToken,
  fbLoggedIn: (state) => state.fbLoggedIn,
  googleLoggedIn: (state) => state.googleLoggedIn
}

export const actions = {

  // Local Register / Login / Logout / Refresh

  async login ({ commit }, { email, password }) {
    const res = await this.$auth.$post('/user/login', { email, password })

    commit('setUser', res.data.user)
    commit('setAccessToken', res.data.accessToken)
    commit('setRefreshToken', res.data.refreshToken)
    commit('setLogin', true)
  },

  async logout ({ commit, state }) {
    await this.$auth.$post('/user/logout', { token: state.refreshToken })

    commit('setAccessToken', '')
    commit('setRefreshToken', '')
    commit('setUser', {})
    commit('setLogin', false)
  },

  async register ({ commit }, { firstName, lastName, email, password }) {
    const res = await this.$auth.$post('/user/register', { firstName, lastName, email, password })

    return res
  },

  async refreshToken ({commit, state}) {
    const res = await this.$auth.$post('/user/token', { token: state.refreshToken })

    commit('setAccessToken', res.accessToken)
  },

  // Facebook Signing / Login / Logout

  async fbSignup ({ commit }) {
    const state = require('crypto').randomBytes(16).toString('hex')
    const res = await this.$auth.$get('https://develomancy-auth-api.herokuappp.com/api/user/auth/facebook', { params: 
        { state: state 
      }})
    window.open(res.url, '_self')
  },

  async fbLogin ({ commit }) {
    const response = await this.$auth.$get('/user/facebook/profile', {
      withCredentials: true
    })

    if (Object.keys(response).length != 0) {
      commit('setFbLogin', true)
      commit('setUser', response.data.user)
    } else {
      commit('setFbLogin', false)
      commit('setUser', {})
    }

  },

  async fbLogout ({ commit }) {
    await this.$auth.$get('/user/facebook/logout', {
      withCredentials: true
    })

    commit('setFbLogin', false)
    commit('setUser', {})
  },

  // Google Signing / Login / Logout

  async googleSignup ({ commit }) {
    const state = require('crypto').randomBytes(16).toString('hex')
    const res = await this.$auth.$get('https://develomancy-auth-api.herokuappp.com/api/user/auth/google', { params: { 
        state: state 
      }})
    window.open(res.url, '_self')
  },

  async googleLogin ({ commit }) {
    const response = await this.$auth.$get('/user/google/profile', {
      withCredentials: true
    })

    if (Object.keys(response).length != 0) {
      commit('setGoogleLogin', true)
      commit('setUser', response.data.user)
    } else {
      commit('setGoogleLogin', false)
      commit('setUser', {})
    }

  },

  async googleLogout ({ commit }) {
    const res = await this.$auth.$get('/user/google/logout', {
      withCredentials: true
    })

    commit('setGoogleLogin', false)
    commit('setUser', {})
  }

}

export const mutations = {
  setUser: (state, user) => state.user = user,
  setLogin: (state, login) => state.loggedIn = login,
  setAccessToken: (state, accessToken) => state.accessToken = accessToken,
  setRefreshToken: (state, refreshToken) => state.refreshToken = refreshToken,
  setFbLogin: (state, fbLoggedIn) => state.fbLoggedIn = fbLoggedIn,
  setGoogleLogin: (state, googleLoggedIn) => state.googleLoggedIn = googleLoggedIn
}