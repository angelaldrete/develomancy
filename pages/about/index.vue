<template>
  <v-main class="pa-0">

    <!-- Develomancy Section -->
    <v-container class="mb-10">
      <v-row align="center" justify="center">
        <v-col lg="8">
          <div class="about-develomancy d-flex flex-column flex-md-row justify-center align-center mr-5 ml-5 mr-md-0 ml-md-0">
            <div class="about-wrapper d-flex flex-column justify-center align-center">
              <v-img
                :max-width="width"
                class="mb-10"
                :src="require('~/assets/undraw_web_developer_p3e5.svg')"
              >
              </v-img>
              <h1 class="font-weight-black darkText--text text-h4 text-sm-h3 text-md-h2 mb-5 mb-md-0">
                Develomancy.
              </h1>
            </div>
            <p class="font-weight-light ml-md-10">
              Software development needs to grow more, whenever we have the
              opportunity to share, we should do it. Develomancy stands as the 
              destiny for developers to create their project, and receive the 
              needed support.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Goal Section -->
    <section class="grey lighten-4 pt-10 pb-10">
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="8">
            <div class="about-goal d-flex justify-center align-center mb-10 flex-column mr-5 ml-5 mr-md-0 ml-md-0">
              <div class="about-develomancy d-flex flex-column flex-md-row justify-center align-center">
                <p class="font-weight-light mr-md-10 mb-10 mb-md-0">
                  Our goal is to make your ideas come true. We develop from
                  features to complete applications with the most high quality
                  technology in the industry. We are always seeking for improvement.
                </p>
                <div class="about-wrapper d-flex flex-column justify-center align-center">
                  <v-img
                    :max-width="width"
                    class="mb-10"
                    :src="require('~/assets/undraw_programming_2svr.svg')"
                  >
                  </v-img>
                  <h1 class="font-weight-black darkText--text text-h3 text-sm-h2 text-md-h1">
                    Goal.
                  </h1>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Learning section -->
    <section class="blog grey lighten-3 py-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="8">
            <div class="about-learning d-flex align-center justify-center mr-5 ml-5 mr-md-0 ml-md-0">
              <div class="about-develomancy d-flex flex-column flex-md-row justify-center align-center">
                <div class="about-wrapper d-flex flex-column justify-center align-center">
                  <v-img
                    :max-width="width"
                    class="mb-10"
                    :src="require('~/assets/undraw_education_f8ru.svg')"
                  >
                  </v-img>
                  <h1 class="font-weight-black darkText--text text-h3 text-sm-h2 text-md-h1 mb-5 mb-md-0">
                    Learning.
                  </h1>
                </div>
                <p class="font-weight-light ml-md-10">
                  We really hope that we can offer as much learning as we can.
                  Developers from our team get to learn everyday whilst loving
                  what they do. So, for those joining the community, we'll love
                  to share with you our experiences.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Community Section -->
    <section class="grey lighten-2">
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="8">
            <div class="about-community d-flex justify-center align-center mr-5 ml-5 mr-md-0 ml-md-0">
              <div class="about-develomancy flex-column flex-md-row d-flex justify-center align-center">
                <p class="font-weight-light ml-md-10">
                  Being a software developer, is becoming a lot more common
                  nowadays, and that's not an issue. It is a benefit that there
                  is more software out there built by an entire community. In
                  Develomancy, we want to offer that, a space that we can use to
                  share experiences and information.
                </p>
                <div class="about-wrapper d-flex flex-column justify-center align-center">
                  <v-img
                    :max-width="width"
                    class="mb-10"
                    :src="require('~/assets/undraw_community_8nwl.svg')"
                  >
                  </v-img>
                  <h1 class="font-weight-black darkText--text text-h4 text-sm-h3 text-md-h2 mb-5 mb-md-0">
                    Community.
                  </h1>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Vision section -->
    <section class="blog darkText py-15">
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="8">
            <div class="about-vision d-flex align-center justify-center mr-5 ml-5 mr-md-0 ml-md-0">
              <div class="about-develomancy flex-column flex-md-row d-flex justify-center align-center">
                <v-img
                  :max-width="width"
                  class="mb-10 hidden-sm-and-down"
                  :src="require('~/assets/undraw_visionary_technology_33jy.svg')"
                >
                </v-img>
                <div class="about-wrapper d-flex flex-column justify-center align-center">
                  <h1 class="font-weight-black white--text text-h3 text-sm-h2 text-md-h1 mb-md-0 mb-5">
                    Vision.
                  </h1>
                  <p class="white--text font-weight-light ml-md-10">
                    We hope our services and information get to grow so the web
                    gets bigger everyday. Our vision is to become a Saas platform
                    that will form a solid community so that we can offer the
                    opportunity to clients and developers to grow.
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

  </v-main>
</template>

<script>
export default {
  computed: {
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
.about-develomancy,
.about-goal,
.about-community,
.about-learning,
.about-vision {
  height: 100vh;
}
</style>