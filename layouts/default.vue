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

  methods: {
    ...mapActions({
      getUser: 'auth/getUser',
    }),
  },

  async created() {
    // await this.getUser()
  },

}
</script>
