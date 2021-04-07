export default function ({ $axios }, inject) {

  const auth = $axios.create()

  auth.setBaseURL(`${process.env.AUTH_API_URL}/api` || 'http://localhost:4000/api')

  inject('auth', auth)

}