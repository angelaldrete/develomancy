<template>
  <v-main class="mb-10">
    <div class="d-flex justify-center align-center">
      <v-img
        max-width="500"
        :src="post.thumbnail"
      >

      </v-img>
      <div class="featured-content ml-5">
        <h1 class="display-2 font-weight-black">
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
}
</script>

<style scoped>

</style>