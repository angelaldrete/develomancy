<template>
  <div>
    <Comment
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"/>
  </div>
</template>

<script>
import Comment from './Comment'

export default {
  components: {
    Comment
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>