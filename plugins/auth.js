export default function ({ $axios }, inject) {

  const auth = $axios.create()

  auth.setBaseURL(process.env.NODE_ENV !== 'production' ? 'http://localhost:4000/api' : 'https://develomancy-auth-api.herokuapp.com/api')

  inject('auth', auth)

}