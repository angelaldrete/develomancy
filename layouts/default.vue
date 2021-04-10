<template>
  <v-app>
    <Navbar :isLoggedIn="loginState"/>
      <nuxt />
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    loginState: false
  }),

  async mounted () {
    const user = await this.$auth.$get('/user', {
      withCredentials: true
    })
    if (user) {
      this.$store.dispatch('auth/getUser', user)
      this.loginState = true
    } else {
      this.loginState = false
    }
  },

}
</script>
