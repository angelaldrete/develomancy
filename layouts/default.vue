<template>
  <v-app>
    <Navbar/>
      <nuxt/>
    <Footer/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {

  components: {
    Navbar,
    Footer
  },

  async mounted () {
    if(!this.isLoggedIn) {
      const user = await this.$auth.$get('/user', {
        withCredentials: true
      })
      if (user) {
        this.$store.dispatch('auth/getUser', user)
      }
    }
  },

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  }

}
</script>
