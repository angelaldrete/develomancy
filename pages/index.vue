<template>

  <v-main class="pa-0">

    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col col="12">
          <div class="hero d-flex flex-column-reverse flex-md-row justify-center align-center ml-5 mr-5 mr-sm-0 ml-sm-0">
            <div class="title">
              <div>
                <div class="title">
                  <h1
                    class="text-h3 text-sm-h2 text-md-h1 darkText--text font-weight-black"
                    id="imagineTitle">
                      Imagine.
                  </h1>
                  <h1
                    class="text-h3 text-sm-h2 text-md-h1 darkText--text font-weight-black"
                    id="createTitle">
                      Create.
                  </h1>
                  <h1 
                    class="text-h3 text-sm-h2 text-md-h1 darkText--text font-weight-black" 
                    id="shareTitle">
                      Share.
                  </h1>
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
                :max-width="width"
                class="mb-10 mb-md-0 hidden-xs-only"
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
          <div class="d-flex justify-center align-center mb-10 flex-column ml-5 mr-5 mr-sm-0 ml-sm-0">
            <h1 class="text-h5 text-sm-h4 text-md-h3 text-left text-sm-center darkText--text mb-5">
              Start the journey. Develop your app.
            </h1>
            <div>
              <p class="text-left text-sm-center darkText--text">
                We develop your app based on your necessities.
              </p>
              <p class="text-left text-sm-center darkText--text">
                This are some of our services we offer.
              </p>
            </div>
            <div class="d-flex justify-center align-center">
              <Services :services="allServices" :class="($vuetify.breakpoint.name !== 'xs') ? 'services-grid' : 'services-xs-grid' "/>
            </div>
            <div>
              <p class="darkText--text mt-10">
                And more.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Blog section -->
    <section class="blog darkText py-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col col="12" md="10">
            <div class="d-flex align-center justify-center flex-column flex-md-row ml-5 mr-5 mr-sm-0 ml-sm-0">
              <div class="blog-block mr-10">
                <h1 class="text-h3 text-sm-h2 text-md-h1 white--text font-weight-black mb-5">
                  Blog.
                </h1>
                <p class="white--text font-weight-light">
                  Get to know the latest news on Information Technologies.
                  Opinions, reviews and interesting topics live here.
                  Use this information as an advice and share your thoughts with
                  the community.
                </p>
              </div>
              <Posts :posts="allPosts" 
                :class="($vuetify.breakpoint.name !== 'xs') ?
                ($vuetify.breakpoint.name !== 'sm' ? 'posts-grid' : 'posts-sm-grid')
                : 'posts-xs-grid'"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Goal Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col md="8">
          <div class="goal d-flex justify-center align-center ml-5 mr-5 ml-sm-0 mr-sm-0 flex-column flex-md-row">
            <div class="goals-image mb-10 mb-md-0">
              <v-img
                :src="require('~/assets/undraw_programming_2svr.svg')"
                :max-width="width"
              >
              </v-img>
            </div>
            <div class="goal-block ml-5">
              <div>
                <h1 class="text-h3 text-sm-h2 text-md-h1 darkText--text font-weight-black mb-5" id="goalTitle">Goal.</h1>
              </div>
              <div id="goalParr" class="font-weight-light">Our goal is to make your ideas come true. We develop from features to complete applications with the most high quality technology in the industry. We are always seeking for improvement.</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Section -->
    <section class="grey lighten-4 py-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col col="12" md="8">
            <div class="projects d-flex justify-center align-center flex-column-reverse flex-md-row ml-5 mr-5 ml-sm-0 mr-sm-0">
              <div class="projects-block">
                <div>
                  <h1 class="text-h3 text-sm-h2 text-md-h1 darkText--text font-weight-black mb-5" id="projectsTitle">Projects.</h1>
                </div>
                <div id="projectsParr" class="font-weight-light mb-5">Some of our projects.</div>
                <Projects :projects="allProjects"/>
              </div>
              <div class="projects-image ml-0 ml-md-10 mb-10 mb-sm-0">
                <v-img
                  :src="require('~/assets/undraw_proud_coder_7ain.svg')"
                  :max-width="width"
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
            <div class="d-flex align-center justify-center flex-column flex-md-row mr-5 ml-5 mr-sm-0 ml-sm-0">
              <div class="contact-block mr-10">
                <h1 class="text-h3 text-sm-h2 text-md-h1 white--text font-weight-black mb-5">
                  Contact.
                </h1>
                <p class="white--text font-weight-light">
                  Get in contact with us. Send as a message and we'll be glad to
                  help you out.
                </p>
              </div>
              <v-card class="pa-5" :min-width="cardWidth">
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

                  <v-select
                    prepend-inner-icon="mdi-note"
                    v-model="contact.select"
                    :items="allItems"
                    :rules="serviceRules"
                    label="Service"
                    required
                  >

                  </v-select>

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
          <div class="d-flex justify-center align-center mb-10 flex-column mr-5 ml-5 mr-sm-0 ml-sm-0">
            <h1 class="text-h5 text-sm-h4 text-md-h3 darkText--text mb-5">
              Or join the community, and become a client and consumer of our content.
            </h1>
            <h1 class="text-h5 text-sm-h4 text-md-h3 darkText--text mb-5">
              You can receive exclusive content, notifications and more.
            </h1>
            <div class="reminder-image mb-10">
              <v-img
                :src="require('~/assets/undraw_develop_app_re_bi4i.svg')"
                :max-width="width"
              >
              </v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

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
    }),

    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
      }
    },

    cardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 200
        case 'sm': return 400
        case 'md': return 400
        case 'lg': return 400
        case 'xl': return 400
      }
    },
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
  },
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

.services-xs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.posts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.posts-sm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.posts-xs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

</style>
