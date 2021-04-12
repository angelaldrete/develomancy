<template>
  <v-main class="pa-0">

    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col col="12">
          <div class="projects-hero d-flex justify-center align-center flex-column flex-md-row ml-5 mr-5 ml-sm-0 mr-sm-0">
            <div class="title">
              <h1 class="text-h3 text-sm-h2 text-md-h1 darkText--text font-weight-black mb-10 mb-sm-0">
                <span>
                  <div id="projectsTitle">Projects.</div>
                </span>
              </h1>
              <div id="projectsDesc" class="font-weight-light mb-5">
                Check out the latest projects we've been working out lately.
              </div>
            </div>
            <div class="projects-hero-image">
              <v-img
                id="projectsHeroImage"
                :src="require('~/assets/undraw_Code_review_re_woeb.svg')"
                :max-width="width"
              >
              </v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Container -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col>
          <div class="list-of-projects d-flex flex-column align-start align-sm-center justify-center ml-5 mr-5 ml-sm-0 mr-sm-0">
            <h1 class="text-h5 text-sm-h4 text-md-h3 mb-10">
              Projects
            </h1>
            <Projects
              :projects="allProjects"
              :class="$vuetify.breakpoint.name === 'xs' ?
              'projects-xs-grid' :
                ($vuetify.breakpoint.name === 'sm' ? 'projects-sm-grid' : 'projects-grid')"
              class="mb-10"/>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Summary Section -->
    <section class="darkText pt-15 pb-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col md="7">
            <div class="summary d-flex justify-center align-center flex-column flex-md-row mr-5 ml-5 mr-md-0 ml-md-0">
              <v-img
                class="mb-10 mb-md-0"
                :max-width="width"
                :src="require('~/assets/img/tracy-adams-TEemXOpR3cQ-unsplash.jpg')"
              >
              </v-img>
              <div class="summary-desc ml-0 ml-md-10">
                <h1 class="text-h3 text-sm-h2 text-md-h1 white--text font-weight-black mb-5">
                  Experience.
                </h1>
                <p class="summ-parr white--text font-weight-light">
                  We cover from frontend to backend applications and enjoy
                  giving value. We definitely seek for learning from our projects
                  and expect to grow. <strong>Vue</strong> and
                  <strong>Express</strong> are our main languages for developing
                  both frontend and backend. We also love <strong>Nuxt</strong>
                  and <strong>Vuex</strong> for both SEO and Store Management
                  but we'll never reject to work on other languages. Key is to
                  keep programming
                </p>
                <p class="white--text font-weight-light mt-10">
                  Hope your project gets listed here soon.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </v-main>
</template>

<script>
import { mapGetters } from 'vuex'
import Projects from '../../components/projects/Projects'

export default {
  components: {
    Projects
  },

  computed: {
    ...mapGetters({
      allProjects: 'projects/allProjects'
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
  }
}
</script>

<style scoped>
  .projects-hero {
    height: 100vh;
  }

  .projects-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    row-gap: 0;
  }

  .projects-xs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    row-gap: 0;
  }

  .projects-sm-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    row-gap: 0;
  }

  .list-of-projects {
    height: 100vh;
  }

  .summ-parr strong {
    font-weight: bold;
  }

</style>

</style>