<template>
  <div>
    <Reply
      v-for="reply in replies"
      :key="reply.id"
      :reply="reply"
      :toComment="toComment"
      :toUser="toUser"
      />
  </div>
</template>

<script>
import Reply from './Reply'

export default {
  components: {
    Reply
  },
  name: 'Replies',
  props: {
    replies: {
      type: Array,
      required: true
    },
    toComment: null,
    toUser: null
  }
}
</script>

<style>

</style>