<template>
  <div>
    <v-card
      tile
      flat
      class="mb-2 pa-5 d-flex"
    >
      <div class="comment-user" :style="`background-image: url('${dumbImage}');`"
      >
      </div>

      <div class="comment-wrapper ml-5">
        <div class="comment-title-wrapper d-flex align-center justify-start">
          <v-card-title class="pa-0 body-1 font-weight-bold">
            Generic username
          </v-card-title>
          <p class="caption font-weight-light ma-0 ml-2" >Date: {{ new Date(reply.date).toLocaleDateString() }} </p>
        </div>
        <div class="comment-content-wrapper">
          <v-card-text class="pa-0 mb-2 mt-2">
            <!-- <div class="blue-grey--text text-body font-weight-bold">@{{toUser}}: </div> -->
            <div class="blue-grey--text text-body font-weight-bold">@User365: </div>
            {{reply.comment}}
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
            {{reply.likes}}
          </v-btn>
          <v-btn
            class="ml-1"
            tile
            depressed
            x-small
            @click="dislike()"
          >
            <v-icon left>mdi-thumb-down</v-icon>
            {{reply.dislikes}}
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
        <div class="replies-wrapper mb-5" v-show="reply.replies">
          <Replies
            :replies="reply.replies"
            :toUser="reply.toUserId"
            :toComment="reply.toComment"/>
        </div>
        <AddComment
          :toUser="reply.toUserId"
          :isHidden="isReplyBoxHidden"
          :toComment="reply.toComment" />
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Replies from './Replies'
import AddComment from './AddComment'
import Comment from './Comment'

export default {
  data: () => ({
    dumbImage: require('~/assets/img/profile-pic.jpg'),
    isReplyBoxHidden: true
  }),
  extends: Comment,
  components: {
    Replies,
    AddComment
  },
  props: {
    reply: Object,
    toComment: Number,
    toUser: Number
  },
  methods: {
    ...mapActions({
      newLike: 'comments/newLike',
      newDislike: 'comments/newDislike'
    }),
    respondComment() {
      this.isReplyBoxHidden = false
    },

    like(commentId, userId) {

    },
    dislike(commentId, userId) {},
    unlike(commentId, userId) {},
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