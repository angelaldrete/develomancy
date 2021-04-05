export default function ({ $axios }, inject) {

  const auth = $axios.create()

  auth.setBaseURL('http://localhost:4000/api')

  inject('auth', auth)

}