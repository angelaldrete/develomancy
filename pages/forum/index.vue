<template>
  <v-main class="pa-0">
    <!-- Hero Section -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col lg="8">
          <div class="forum-hero d-flex justify-center align-center">
            <div class="forum-hero-wrapper d-flex flex-column text-center">
              <v-img
                id="blogHeroImage"
                :src="require('~/assets/undraw_in_progress_ql66.svg')"
                max-width="700"
                class="mb-10"
              >
              </v-img>
              <div class="forum-hero-title display-4 font-weight-black darkText--text mb-10">
                Uh oh!
              </div>
              <p class="font-weight-light">
                "Codemmunication" is still under development.
                Follow for more information
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {

}
</script>

<style scoped>

.forum-hero {
  height: 100vh;
}

</style>