export default function ({ $axios }, inject) {

  const auth = $axios.create()

  auth.setBaseURL('https://develomancy-auth-api.herokuapp.com/api' || 'http://localhost:4000/api')

  inject('auth', auth)

}