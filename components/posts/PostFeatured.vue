<template>
  <v-main class="mb-10">
    <div class="d-flex justify-center align-center flex-column flex-md-row">
      <v-img
        class="mb-5 mb-md-0"
        :max-width="width"
        :src="post.thumbnail"
      >

      </v-img>
      <div class="featured-content ml-md-5">
        <h1 class="text-h4 text-sm-h3 text-md-h2 mb-5 mb-md-10 font-weight-black">
          {{post.title}}
        </h1>
        <p class="featured-parr font-weight-light">
          {{post.excerpt}}
        </p>
        <v-btn
          color="primary"
          tile
          depressed
          @click="$router.push(`/blog/${post.id}/${post.slug}`)"
        >
          See more
        </v-btn>
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  props: {
    post: Object,
  },

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

</style>