export default function ({ $axios }, inject) {

  const auth = $axios.create()

  auth.setBaseURL('https://develomancy-auth-api.herokuapp.com/api')

  inject('auth', auth)

}