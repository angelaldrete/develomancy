<template>
  <v-app>
    <Navbar/>
      <nuxt/>
    <Footer/>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {

  components: {
    Navbar,
    Footer
  },

  methods: {
    ...mapActions({
      fbLogin: 'auth/fbLogin',
      googleLogin: 'auth/googleLogin'
    }),
  },

  async mounted() {
    if (!this.isLoggedIn && !this.fbLoggedIn) {
      await this.googleLogin()
    }

    if (!this.isLoggedIn && !this.googleLoggedIn) {
      await this.fbLogin()
    }
  },

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      fbLoggedIn: 'auth/fbLoggedIn',
      googleLoggedIn: 'auth/googleLoggedIn'
    })
  }

}
</script>
