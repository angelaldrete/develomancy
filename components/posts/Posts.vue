<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <Post :post="post"/>
    </div>
  </div>
</template>

<script>
import Post from './Post'

export default {
  components: {
    Post,
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
  }
}
</script>

<style>

</style>