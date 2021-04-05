<template>
  <v-dialog
    v-model="show"
    width="400"
  >
    <v-card class="pa-5">
      <v-img
        class="ml-auto mr-auto mb-2 mt-2"
        width="300"
        src="/develomancy_logo.svg"
      >
      </v-img>
      <v-tabs
        grow
        v-model="tabs"
      >
        <v-tab>Log in</v-tab>
        <v-tab>Sign up</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <div class="d-flex align-center justify-center">
              <v-card-title>
                Log in
              </v-card-title>
            </div>
            <v-form v-model="valid">
              <v-text-field
                prepend-inner-icon="mdi-account"
                v-model="email"
                label="Email"
                :rules="emailRules"
                required
              ></v-text-field>

              <v-text-field
                prepend-inner-icon="mdi-lock"
                type="password"
                v-model="password"
                label="Password"
                :rules="passwordRules"
                required
                class="mb-5"
              ></v-text-field>

              <v-btn
                depressed
                tile
                outlined
                color="primary"
                class="mb-5"
                block
                @click.prevent="login"
              >
                Log in
              </v-btn>

              <v-btn
                depressed
                tile
                color="#3b5998"
                class="mb-5 white--text"
                block
                @click="fbLogin"
              >
                <v-icon left>mdi-facebook</v-icon>
                Continue with Facebook
              </v-btn>

              <v-btn
                depressed
                tile
                color="#db4437"
                class="white--text"
                block
                @click="googleLogin"
              >
                <v-icon left>mdi-google</v-icon>
                Continue with Google
              </v-btn>
            </v-form>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <div class="d-flex align-center justify-center">
              <v-card-title>
                Sign up
              </v-card-title>
            </div>
            <v-form>
              <v-text-field
                v-model="firstName"
                label="First Name"
                :rules="nameRules"
                required
              ></v-text-field>

              <v-text-field
                v-model="lastName"
                label="Last Name"
                :rules="nameRules"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Email"
                :rules="emailRules"
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="password"
                label="Password"
                :rules="passwordRules"
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="confirmPassword"
                label="Confirm Password"
                :rules="passwordRules"
                required
                class="mb-5"
              ></v-text-field>

              <v-btn
                depressed
                tile
                outlined
                color="primary"
                class="mb-5"
                block
                @click.prevent="signUp"
              >
                Sign up
              </v-btn>

              <v-btn
                depressed
                tile
                color="#3b5998"
                class="mb-5 white--text"
                block
                @click.prevent="fbSign"
              >
                <v-icon left>mdi-facebook</v-icon>
                Sign up with Facebook
              </v-btn>

              <v-btn
                depressed
                tile
                color="#db4437"
                class="white--text"
                block
                @click.prevent="googleSign"
              >
                <v-icon left>mdi-google</v-icon>
                Sign up with Google
              </v-btn>

            </v-form>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Auth',
  props: [
    'value',
    'tabs'
  ],
  data: () => ({
    email: '',
    name: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    valid: false,
    nameRules: [
      v => !!v || 'Name is required'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ],
    emailRules: [
      v => !!v || 'Email is required'
    ],
  }),

  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    ...mapGetters({
      getUser: 'auth/getUser',
    })
  },

  methods: {

    ...mapActions({
      localLogin: 'auth/login',
      localSignUp: 'auth/register',
      fbSignup: 'auth/fbSignup',
      googleSignup: 'auth/googleSignup',
    }),

    async login() {

      if (this.email != '' || this.password != '') {
        await this.localLogin({email: this.email, password: this.password})
        if (this.getUser) {
          this.show = false
          this.$router.push('/')
        }
      }
    },

    async fbLogin() {
      await this.fbSignup()
    },

    async googleLogin() {
      await this.googleSignup()
    },

    async signUp() {
      if (this.firstName != '' || this.lastName != '' || this.email != '' || this.password != '' || this.confirmPassword != '') {
        if (this.password === this.confirmPassword) {
          const didRegister = await this.localSignUp({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
          })
          if (didRegister.success == false) {
            console.log(didRegister.message)
          } else {
            this.tabs = 0
            this.$router.push('/')
          }
        } else {
          console.log('Passwords are not equal')
        }
      }
    },

    async fbSign() {
      await this.fbSignup()
    },

    async googleSign() {
      await this.googleSignup()
    }
  }
}
</script>

<style>

</style>