<template>

  <v-main class="pa-0">

    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col>
          <div class="hero d-flex justify-center align-center">
            <div class="title">
              <div>
                <div class="title">
                  <h1 class="display-4 darkText--text font-weight-black" id="imagineTitle">Imagine.</h1>
                  <h1 class="display-4 darkText--text font-weight-black" id="createTitle">Create.</h1>
                  <h1 class="display-4 darkText--text font-weight-black" id="shareTitle">Share.</h1>
                </div>
              </div>
              <div id="slogan" class="font-weight-light mb-5">Develop your ideas. Make 'em true.</div>
              <v-btn
                depressed
                tile
                color="primary"
              >
                Start now!
              </v-btn>
            </div>
            <div class="hero-image">
              <v-img
                :src="require('~/assets/undraw_web_development_w2vv.svg')"
                max-width="700"
              >
              </v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Services Section -->
    <v-container class="mb-15">
      <v-row align="center" justify="center">
        <v-col>
          <div class="d-flex justify-center align-center mb-10 flex-column">
            <h1 class="display-2 darkText--text mb-5">
              Start the journey. Develop your app.
            </h1>
            <div>
              <p class="darkText--text">
                We develop your app based on your necessities.
              </p>
              <p class="darkText--text">
                This are some of our services we offer.
              </p>
            </div>
          </div>
          <div class="d-flex justify-center align-center">
            <Services :services="allServices" class="services-grid"/>
          </div>
          <div class="d-flex justify-center mt-10">
            <p>And more.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Blog section -->
    <section class="blog darkText py-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="10">
            <div class="d-flex align-center justify-center">
              <div class="blog-block mr-10">
                <h1 class="display-4 white--text font-weight-black mb-5">
                  Blog.
                </h1>
                <p class="white--text font-weight-light">
                  Get to know the latest news on Information Technologies.
                  Opinions, reviews and interesting topics live here.
                  Use this information as an advice and share your thoughts with
                  the community.
                </p>
              </div>
              <Posts :posts="allPosts" class="posts-grid"/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Goal Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col md="8">
          <div class="goal d-flex justify-center align-center">
            <div class="goals-image">
              <v-img
                :src="require('~/assets/undraw_programming_2svr.svg')"
                max-width="700"
              >
              </v-img>
            </div>
            <div class="goal-block ml-5">
              <div>
                <h1 class="display-4 darkText--text font-weight-black mb-5" id="goalTitle">Goal.</h1>
              </div>
              <div id="goalParr" class="font-weight-light">Our goal is to make your ideas come true. We develop from features to complete applications with the most high quality technology in the industry. We are always seeking for improvement.</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Section -->
    <section class="grey lighten-4">
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="8">
            <div class="projects d-flex justify-center align-center">
              <div class="projects-block">
                <div>
                  <h1 class="display-4 darkText--text font-weight-black mb-5" id="projectsTitle">Projects.</h1>
                </div>
                <div id="projectsParr" class="font-weight-light mb-5">Some of our projects.</div>
                <Projects :projects="allProjects"/>
              </div>
              <div class="projects-image ml-10">
                <v-img
                  :src="require('~/assets/undraw_proud_coder_7ain.svg')"
                  max-width="700"
                >
                </v-img>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact section -->
    <section class="blog darkText py-15 mb-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="6">
            <div class="d-flex align-center justify-center">
              <div class="contact-block mr-10">
                <h1 class="display-4 white--text font-weight-black mb-5">
                  Contact.
                </h1>
                <p class="white--text font-weight-light">
                  Get in contact with us. Send as a message and we'll be glad to
                  help you out.
                </p>
              </div>
              <v-card class="pa-5" min-width="400">
                <v-form v-model="valid">
                  <h1>Contact</h1>
                  <v-text-field
                    prepend-inner-icon="mdi-account"
                    v-model="contact.name"
                    label="Name"
                    :rules="nameRules"
                    required
                  ></v-text-field>

                  <v-text-field
                    prepend-inner-icon="mdi-email"
                    v-model="contact.email"
                    label="Email"
                    :rules="emailRules"
                    required
                  ></v-text-field>

                  <!-- <v-select
                    prepend-inner-icon="mdi-note"
                    v-model="contact.select"
                    :items="allItems"
                    :rules="serviceRules"
                    label="Service"
                    required
                  >

                  </v-select> -->

                  <v-textarea
                    prepend-inner-icon="mdi-message"
                    v-model="contact.message"
                    label="Message"
                    hint="Input message..."
                    class="mb-5"
                  >

                  </v-textarea>

                  <v-btn
                    depressed
                    tile
                    color="primary"
                    block
                    @click="submit"
                  >
                    Send
                  </v-btn>
                </v-form>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Reminder Section -->
    <v-container class="mb-10">
      <v-row align="center" justify="center">
        <v-col>
          <div v-if="isLoggedIn" class="d-flex justify-center align-center mb-10 flex-column">
            <h1 class="display-2 darkText--text mb-5">
              Welcome to the community, be aware of our exclusive content!
            </h1>
            <h1 class="display-2 darkText--text mb-10">
              You will receive exclusive content, notifications and more.
            </h1>
            <div class="reminder-image mb-10">
              <v-img
                :src="require('~/assets/undraw_develop_app_re_bi4i.svg')"
                max-width="700"
              >
              </v-img>
            </div>
          </div>
          <div v-else class="d-flex justify-center align-center mb-10 flex-column">
            <h1 class="display-2 darkText--text mb-5">
              Or join the community, and become a client and consumer of our content.
            </h1>
            <h1 class="display-2 darkText--text mb-5">
              You can receive exclusive content, notifications and more.
            </h1>
            <v-btn
              class="mb-15 mt-10"
              depressed
              tile
              min-width="200"
              color="primary"
              @click="openAuthDialogHome(1)"
            >
              Join
            </v-btn>
            <div class="reminder-image mb-10">
              <v-img
                :src="require('~/assets/undraw_develop_app_re_bi4i.svg')"
                max-width="700"
              >
              </v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <template v-if="!isLoggedIn">
      <Auth
        v-model="dialogActive"
        :tabs="tabs"
      />
    </template>

  </v-main>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

import Auth from '@/components/Auth.vue'
import Projects from '../components/projects/Projects'
import Services from'../components/services/Services'
import Posts from '../components/posts/Posts'

export default {
  name: 'Home',
  components: {
    Auth,
    Projects,
    Services,
    Posts
  },
  computed: {
    ...mapGetters({
      allServices: 'services/allServices',
      allPosts: 'posts/allPosts',
      allProjects: 'projects/allProjects',
      allItems: 'contact/allItems',
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  data: () => ({
    valid: false,
    nameRules: [
      v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    serviceRules: [
      v => !!v || 'Service is required'
    ],
    contact: {
      name: '',
      email: '',
      select: '',
      message: ''
    },
    tabs: null,
    dialogActive: false
  }),
  filters: {
    ellipsis: (value) => {
      let limit = 130
      if(value.length > limit) {
        value = value.slice(0, limit - 1)
        return value + '...'
      }

      return value
    },
  },
  methods: {
    submit() {

    },

    openAuthDialogHome(val) {
      this.dialogActive = !this.dialogActive
      this.tabs = val
    }
  }
}
</script>

<style scoped>

.hero,
.goal,
.projects {
  height: 100vh;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

</style>
