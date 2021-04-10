<template>
  <div>

    <Auth
      v-model="dialogActive"
      :tabs="tabs"
    />

    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item @click="$router.push('/'), drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/projects'), drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/blog'), drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-chat-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/forum'), drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-message-processing-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Forum (Coming soon)</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/about'), drawer = !drawer">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat app color="white">

      <v-app-bar-title>
        <img src="/develomancy_logo.svg">
      </v-app-bar-title>

      <v-spacer></v-spacer>

        <v-btn outlined tile color="primary" class="font-weight-bold" 
          @click="!(isLoggedIn && getUser) ? openAuthDialog(0) : $router.push('/my-account')">
          {{!(isLoggedIn && getUser) ? 'Login' : 'My Account'}}
        </v-btn>

        <v-btn depressed tile color="primary" class="ml-3 font-weight-bold" 
          @click="!(isLoggedIn && getUser) ? openAuthDialog(1) : logOut()">
          {{!(isLoggedIn && getUser) ? 'Signup' : 'Logout'}}
        </v-btn>

      <v-app-bar-nav-icon tile text class="ml-3" @click="drawer = !drawer">
      </v-app-bar-nav-icon>

    </v-app-bar>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Auth from '@/components/Auth.vue'

export default {

  name: 'Navbar',
  components: {
    Auth
  },

  data:() => ({
    drawer: false,
    selectedItem: null,
    dialogActive: false,
    tabs: null,
  }),

  methods: {
    openAuthDialog(val) {
      this.dialogActive = !this.dialogActive
      this.tabs = val
    },
    ...mapActions({
      logout: 'auth/logout',
    }),

    async logOut() {
      if(this.isLoggedIn) {
        await this.logout()
      }
    },
  },

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      getUser: 'auth/getUser'
    })
  },
}
</script>

<style>

</style>