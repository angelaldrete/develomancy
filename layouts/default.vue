<template>
  <v-app>
    <Navbar/>
      <nuxt/>
    <Footer/>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {

  components: {
    Navbar,
    Footer
  },

  async created() {
    this.$nextTick(() => {
      const user = await this.$auth.$get('/user', {
        withCredentials: true
      })
      if (user) {
        this.$store.dispatch('auth/getUser', user)
      } else {
        return
      }
    })
  }

}
</script>
