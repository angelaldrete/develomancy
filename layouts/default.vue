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
    this.$auth.$get('/user', {
      withCredentials: true
    }).then((user) => {
      if (user) {
        store.dispatch('auth/getUser', user)
      } else {
        return
      }
    }).catch(() => {
      store.commit('auth/setUser', {})
      store.commit('auth/setLogin', false)
    })
  }

}
</script>
