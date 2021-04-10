<template>
  <div v-show="!isHidden">
    <v-form class="d-flex" @submit.prevent="submitComment">
      <div class="comment-user mr-5" :style="`background-image: url('${dumbImage}');`"
      >
      </div>
      <v-textarea
        ref="addCommentBox"
        v-model="comment"
        append-outer-icon="mdi-send"
        @keydown.enter.exact.prevent="submitComment"
        @keyup.enter.exact.prevent="submitComment"
        @click:append-outer="submitComment"
        @click:clear="clearComment"
        outlined
        auto-grow
        rows="1"
        clearable
        clear-icon="mdi-close-circle"
        :label="toUser ? '@' + toUser + ':' : 'Comment...'"
        type="text"
      >
      </v-textarea>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    toComment: null,
    toUser: null,
    isHidden: false
  },
  
  data: () => ({
    dumbImage: require('~/assets/img/profile-pic.jpg'),
    comment: '',
  }),

  updated() {
    this.$refs.addCommentBox.focus()
  },

  name: 'AddComment',

  methods: {
    submitComment() {

      if(!this.comment) {
        return
      }

      if (this.toUser) {
        // Show comment as reply
        const reply = {
          commentId: this.toComment,
          date: Date.now(),
          toUser: this.toUser,
          comment: this.comment
        }

        this.addComment(reply)

      } else {
        // Show comment as single in Comments List
        const comment = {
          commentId: this.toComment,
          date: Date.now(),
          comment: this.comment
        }

        this.addComment(comment)

      }

      this.clearComment()
    },

    clearComment() {
      this.comment = ''
    },

    ...mapActions({
      addComment: 'comments/addComment'
    })

  }
}
</script>

<style>

</style>