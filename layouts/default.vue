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
      getUser: 'auth/getUser',
    }),
  },

  mounted() {
    this.getUser()
  },

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    })
  }

}
</script>
