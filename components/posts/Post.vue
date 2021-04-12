<template>
  <v-card class="post-card">
    <div :style="`background-image: url('${post.thumbnail}')`"
      class="fill-height post-card-image">
      <div class="fill-height bottom-gradient"></div>
    </div>
    <v-card-title class="font-weight-bold text-body-1">{{post.title}}</v-card-title>
    <v-card-text>{{ post.excerpt | ellipsis }}</v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="primary"
        class="font-weight-bold"
        @click="$router.push(`/blog/${post.id}/${post.slug}`)"
      >
        MORE
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: Object,
  },

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
}
</script>

<style scoped>

.bottom-gradient {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}

.post-card {
  overflow: hidden;
}

.post-card-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
}

</style>