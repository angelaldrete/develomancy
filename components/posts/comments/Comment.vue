<template>
  <div>
    <v-card
      tile
      outlined
      class="mb-5 pa-5 grey lighten-4 d-flex"
    >
      <div class="comment-user" :style="`background-image: url('${dumbImage}');`"
      >
      </div>

      <div class="comment-wrapper ml-5 flex-grow-1">
        <div class="comment-title-wrapper d-flex align-center justify-start">
          <v-card-title class="pa-0 body-1 font-weight-bold">
            Generic username
          </v-card-title>
          <p class="caption font-weight-light ma-0 ml-2" >Date: {{ new Date(comment.date).toLocaleDateString() }} </p>
        </div>
        <div class="comment-content-wrapper">
          <v-card-text class="pa-0 mb-2 mt-2">
            {{comment.comment}}
          </v-card-text>
        </div>
        <div class="rate-wrapper d-flex align-center justify-start mb-5">
          <v-btn
            tile
            depressed
            x-small
            @click="like()"
          >
            <v-icon left>mdi-thumb-up</v-icon>
            {{comment.likes}}
          </v-btn>
          <v-btn
            class="ml-1"
            tile
            depressed
            x-small
            @click="dislike()"
          >
            <v-icon left>mdi-thumb-down</v-icon>
            {{comment.dislikes}}
          </v-btn>
          <v-btn
            class="ml-1"
            depressed
            x-small
            @click="respondComment()"
          >
            Respond
          </v-btn>
        </div>
        <div class="replies-wrapper mb-5" v-show="comment.replies">
          <Replies
            :replies="comment.replies"
            :toUser="comment.userId"
            :toComment="comment.id"
          />
        </div>
        <AddComment
          :toUser="comment.userId"
          :toComment="comment.id"
          :isHidden="isReplyBoxHidden" />
      </div>
    </v-card>
  </div>
</template>

<script>
import Replies from './Replies'
import AddComment from './AddComment'

export default {
  data: () => ({
    dumbImage: require('~/assets/img/profile-pic.jpg'),
    isReplyBoxHidden: true,
  }),
  methods: {
    respondComment() {
      this.isReplyBoxHidden = false
    },
    like(commentId, userId) {

    },

    dislike(commentId, userId) {

    },

    unlike(commentId, userId) {

    }
  },
  name: 'Comment',
  components: {
    Replies,
    AddComment
  },
  props: {
    comment: Object,
    toUser: Number,
  }
}
</script>

<style>
  .comment-user {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    border-radius: 50% !important;
  }
</style>